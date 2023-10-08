import { QuickDB } from "quick.db";
const db = new QuickDB();
const db_forum = db.table("forum");
const db_loggedUser = db.table("loggedUser");

export const getPost = async (req, res) => {
  try { // -
    const posts = await db_forum.all() || [];
    res.json({ status: true, data: posts });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const getPostByOwner = async (req, res) => {
  try { // params: { loginID }
    const user = await db_loggedUser.get(req.query.loginID);
    const posts = await db_forum.get(user.id) || [];
    res.json({ status: true, data: posts });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const createPost = async (req, res) => {
  try { // body: { loginID, title, description }
    const userInput = req.body;
    if (!userInput.title || !userInput.description) {
      return res.json({ status: false });
    }
    const user = await db_loggedUser.get(req.body.loginID);
    const prevPost = await db_forum.get(user.id) || [];
    const newPost = [
      ...prevPost,
      {
        "postID": prevPost[prevPost.length - 1]?.postID + 1 || 0,
        "owner": user.id,
        "title": req.body.title,
        "description": req.body.description,
        "createdAt": new Date(),
        "upvotes": [],
        "downvotes": [],
        "comments": []
      }];
    await db_forum.set(user.id, newPost);
    res.json({ status: true, postID: prevPost.length });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const editPost = async (req, res) => {
  try { // body: { loginID, postID, title, description }
    const userInput = req.body;
    const user = await db_loggedUser.get(userInput.loginID);
    const userPost = await db_forum.get(user.id) || [];
    const postToEdit = userPost.find(p => p.postID == userInput.postID);
    const newPost = userPost.filter(p => p.postID != userInput.postID);
    const editedPost = {
      ...postToEdit,
      title: userInput.title,
      description: userInput.description,
    };
    await db_forum.set(user.id, [...newPost, editedPost]);
    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const deletePost = async (req, res) => {
  try { // params: { loginID, postID }
    const user = await db_loggedUser.get(req.query.loginID);
    const postID = req.query.postID;
    const prevPost = await db_forum.get(user.id) || [];
    const newPost = prevPost.filter(p => p.postID != postID);
    await db_forum.set(user.id, newPost);
    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const addComment = async (req, res) => {
  try { // body: { ownerUUID, postID, loginID, comment }
    const userInput = req.body;
    const user = await db_loggedUser.get(userInput.loginID);
    const userPost = await db_forum.get(userInput.ownerUUID) || [];
    const postToEdit = userPost.find(p => p.postID == userInput.postID);
    const postNotToEdit = userPost.filter(p => p.postID != userInput.postID);
    const newPost = {
      "owner": user.id,
      "content": userInput.comment,
      "createdAt": new Date()
    }
    const editedPost = {
      ...postToEdit,
      comments: [...postToEdit.comments, newPost]
    };
    await db_forum.set(userInput.ownerUUID, [...postNotToEdit, editedPost]);
    res.json({ status: true, data: newPost });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const updateVote = async (req, res) => {
  try { // params: { ownerUUID, postID, voterUUID, voteType }
    const params = req.query;

    const postList = await db_forum.get(params.ownerUUID);
    if (!postList) return res.json({ status: false });

    const postToEdit = postList.find(m => m.postID == params.postID);
    if (!postToEdit) return res.json({ status: false });

    if (params.voteType === 'upvotes') {
      if (postToEdit.upvotes.includes(params.voterUUID)) {
        postToEdit.upvotes = postToEdit.upvotes.filter(m => m !== params.voterUUID);
      } else {
        postToEdit.downvotes = postToEdit.downvotes.filter(m => m !== params.voterUUID);
        postToEdit.upvotes.push(params.voterUUID);
      }
    } else if (params.voteType === 'downvotes') {
      if (postToEdit.downvotes.includes(params.voterUUID)) {
        postToEdit.downvotes = postToEdit.downvotes.filter(m => m !== params.voterUUID);
      } else {
        postToEdit.upvotes = postToEdit.upvotes.filter(m => m !== params.voterUUID);
        postToEdit.downvotes.push(params.voterUUID);
      }
    }

    const postNotToEdit = postList.filter(m => m.postID != params.postID);
    const newPost = [...postNotToEdit, postToEdit];
    await db_forum.set(params.ownerUUID, newPost);

    res.json({ status: true, data: postToEdit });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}


