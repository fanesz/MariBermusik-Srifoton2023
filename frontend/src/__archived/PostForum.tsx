const PostForum = () => {
  return (
    <div className="p-10">
      <h1 className="text-3xl p-5">Post Forum</h1>
      <section className="p-10 mx-16 border border-blue-800 rounded-xl shadow-xl">
        <form action="" className="">
          <div className="px-16 md:flex md:items-center mb-6">
            <div className="">
              <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="inline-full-name">Judul</label>
            </div>
            <div className="md:w-full">
              <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:bg-white focus:border-green-600" id="judul" type="text" />
            </div>
          </div>
          <div className="px-16 mb-6">
            <div className="">
              <label className="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" htmlFor="inline-password">Deskripsi</label>
            </div>
            <div className="my-6">
              <textarea className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 focus:bg-white focus:border-green-600" id="deskripsi"></textarea>
            </div>
          </div>
          <div className="px-16 text-end p-5">
            <button className="shadow bg-blue-500 hover:bg-blue-600 focus:shadow-outline text-white font-bold py-2 px-4 rounded" type="submit">Post</button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default PostForum