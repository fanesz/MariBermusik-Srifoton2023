import { useEffect, useState } from "react";
import { getPost, getPostByOwner, getUser } from "../../api/services";
import { Link } from 'react-router-dom';
import { PlayIcon } from "@heroicons/react/24/solid";
import { DocumentIcon } from "@heroicons/react/24/outline";


const Forum = () => {
  const [post,setPost]=useState<any[]>([])
  const [selectedPost,setSelectedPost]=useState<any[]>([])
  const [user,setUser]=useState<any[]>([])
  const [showComments,setShowComments]=useState(false)
  const [comments,setComments]=useState("")
  const [search,setSearch]=useState("")
  const [commentsLength,setCommentsLength]=useState(0)
  const [sendButton,setSendButton]=useState(false)

  const fetchPost = async () => {
    const res = await getPost();
    if(res.status) {
      setPost(res.data)
      setSelectedPost(res.data)
    }
  }

  const fetchUser = async () => {
    const res = await getUser();
    if (res.status) setUser(res.data);
  }
  

  const showSendButton = event => {
    setComments(event.target.value)
    setCommentsLength(event.target.value.length)
    event.target.value!==""?setSendButton(true):setSendButton(false)
  }

  const searchForum = event => {
    setSearch(event.target.value)
    event.target.value?setSelectedPost(post.filter((filter)=>filter.value.title.includes(event.target.value))):setSelectedPost(post)
  }

  useEffect(() => {
    fetchPost();
    fetchUser();
  },[]);
  // console.log(post);
  // console.log(user);
  // console.log(search)
  // console.log(selectedPost)

  return (
    <div className="px-16 pt-10">

      <div className="text-2xl">
        <span>Forum Diskusi</span>
      </div>

      <div className="mt-8">

        <div className="flex">

          <div className="w-full">
            <input className="w-full rounded p-2.5 shadow-lg bg-slate-100 text-black border border-gray-300" placeholder="Judul diskusi" value={search} onChange={searchForum} spellCheck={false} />
          </div>

          <div className="ms-3">
            <button className="h-full px-3 w-full bg-blue-800 text-white rounded transition duration-300 hover:bg-blue-950 shadow-lg">Search</button>
          </div>

          <div>
            <Link to='/postForum'><button className="h-full ms-5 bg-green-800 text-white rounded transition duration-300 py-2 px-4 hover:bg-blue-950 shadow-lg truncate">Diskusi Baru</button></Link>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-10">
          {selectedPost?.map((post, index) => (
            <div key={index} className="border border-gray-600 rounded-lg shadow-xl p-5">
              <span className="text-blue-600">{user?.filter((filter)=>filter.id==post?.value.owner)[0].value.username}&nbsp;</span>
              <span>{new Date(post.value.createdAt).toLocaleDateString()}</span>
              <div className="text-2xl">{post.value.title}</div>
              <div className="mt-3">{post.value.description}</div>
              <button className="mt-3 ms-5 rounded-lg shadow-lg bg-blue-300 p-2 hover:bg-blue-400" onClick={()=>setShowComments(!showComments)}>Comments</button>
              {showComments&&
              <div className="mt-3 ms-5 relative">
                <textarea maxLength={400} className="w-full resize-none border-2 rounded-lg p-5" rows={4} value={comments} placeholder="Join the discussion ..." onChange={showSendButton} spellCheck={false}></textarea>
                <button><PlayIcon className={`right-4 bottom-4 absolute w-6 ${sendButton ? "text-blue-600 hover:text-blue-900":" text-blue-200"}`} /></button>
                <div className="absolute left-4 bottom-4 flex items-center">
                  <span><DocumentIcon className="w-6 "/></span>
                  <span>{commentsLength}/400</span>
                </div>
              </div>
              }
              {post?.value.comments.length>0 && 
              <div className="mt-3 ms-5 flex flex-col gap-3">
              {post?.value.comments.map((comments,index)=>(
                <div key={index} className="border border-gray-600 rounded-lg shadow-xl p-5">
                <span className="text-blue-600">{user?.filter((filter)=>filter.id==comments.owner)[0].value.username}&nbsp;</span>
                <span>{new Date(comments.createdAt).toLocaleDateString()}</span>
                <div className="mt-3">{comments.content}</div>
              </div>
              ))}
              </div>
              }
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Forum