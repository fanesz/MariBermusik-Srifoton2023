import { createPost } from "../../api/services";
import { useEffect, useRef, useState } from "react";


const PostForum = () => {
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const descriptionTextArea = useRef<any>(null)

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleDescription = (e) => {
        setDescription(e.target.value)

    }

    useEffect(()=>{
        createPost(title, description)
        descriptionTextArea.current.style.height = "auto";
        descriptionTextArea.current.style.height = descriptionTextArea.current.scrollHeight + "px";
    },[title,description])

    return (
    <div className="p-10">
        <h1 className="text-3xl p-5">Post Forum</h1>
        <section className="p-10 mx-16 border border-blue-800 rounded-xl shadow-xl">
            <div className="px-16 md:flex md:items-center mb-6">
                <div className="">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">Judul</label>
                </div>
                <div className="md:w-full">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:bg-white focus:border-green-600" type="text" value={title} onChange={handleTitle}/>
                </div>
            </div>
            <div className="px-16 mb-6">
                <div className="">
                    <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4">Deskripsi</label>
                </div>
                <div className="my-6">
                    <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:bg-white focus:border-green-600 resize-none" rows={3} ref={descriptionTextArea} value={description} onChange={handleDescription}></textarea>
                </div>
            </div>
            <div className="px-16 text-end p-5">
                <button className="shadow bg-blue-500 hover:bg-blue-600 focus:shadow-outline text-white font-bold py-2 px-4 rounded" onClick={()=>createPost(title, description)}>Post</button>
            </div>
        </section>
    </div>
    )
}

export default PostForum