const Forum = () => {

  return (
    <div className="border border-blue-300 px-16 pt-10">

      <div className="text-2xl border border-red-300">
        <span>Forum Diskusi</span>
      </div>

      <div className="mt-8">

        <div className="flex border border-yellow-600">

          <div className="w-full">
            <input className="w-full rounded p-2.5 shadow-lg bg-slate-100 text-black border border-gray-300" placeholder="Judul diskusi" spellCheck={false} />
          </div>

          <div className="ms-3">
            <button className="h-full px-3 w-full bg-blue-800 text-white rounded transition duration-300 hover:bg-blue-950 shadow-lg">Search</button>
          </div>

          <div>
            <button className="h-full ms-5 bg-green-800 text-white rounded transition duration-300 py-2 px-4 hover:bg-blue-950 shadow-lg truncate">Diskusi Baru</button>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-10 border border-green-500">
          {[...Array(4)].map((item, index) => (
            <div className="border border-gray-600 rounded-lg shadow-xl p-5">

              <div>27.08.2022, 09.30 PM</div>
              <div className="text-blue-600">Ahmad Na Jaemin</div>
              <div className="mt-3">
                Hi! Thanks for following our store, we have a special promo for you, please check terms and condition right here
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Forum