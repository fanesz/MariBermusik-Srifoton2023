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
  try { // body: { loginID }
    const user = await db_loggedUser.get(req.body.loginID);
    const posts = await db_forum.get(user.id) || [];
    res.json({ status: true, data: posts });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const createPost = async (req, res) => {
  try { // body: { loginID, title, description }
    // db_forum.deleteAll();
    const userInput = req.body;
    if (!userInput.title || !userInput.description) {
      return res.json({ status: false });
    }
    const user = await db_loggedUser.get(req.body.loginID);
    const prevPost = await db_forum.get(user.id) || [];
    const newPost = [
      ...prevPost,
      {
        "postID": prevPost.length,
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
  try { // body: { loginID, title, description }, params: { postID }
    const user = await db_loggedUser.get(req.body.loginID);
    const postID = req.query.postID;
    const userPost = await db_forum.get(user.id) || [];
    const postToEdit = userPost.find(p => p.postID == postID);
    const newPost = userPost.filter(p => p.postID != postID);
    const editedPost = {
      ...postToEdit,
      title: req.body.title,
      description: req.body.description,
    };
    await db_forum.set(user.id, [...newPost, editedPost]);
    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const deletePost = async (req, res) => {
  try { // body: { loginID, postID }
    const user = await db_loggedUser.get(req.body.loginID);
    const postID = req.body.postID;
    const prevPost = await db_forum.get(user.id) || [];
    const newPost = prevPost.filter(p => p.postID !== postID);
    await db_forum.set(user.id, newPost);
    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}


const post = {
  postID: 0,
  owner: "owner",
  title: "post1",
  description: "description",
  createdAt: "date",
  comments: [
    {
      owner: "owner",
      content: "content",
      createdAt: "date",
    },
    {
      owner: "owner",
      content: "content",
      createdAt: "date",
    }
  ]
}