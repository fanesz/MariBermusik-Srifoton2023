const Forum = () => {
    return (
        <div className="p-10">
            <h1 className="text-3xl p-5">Forum Diskusi</h1>
            <section className="flex justify-around items-center">  
                <form action="" className="p-10">
                    <input className="bg-slate-100 text-black border-gray-300 rounded w-96 p-3 shadow-lg" type="search" placeholder="Judul diskusi" />
                    <button type="submit" className="bg-blue-800 text-white rounded transition duration-300 py-2 px-4 hover:bg-blue-950 shadow-lg">Search</button>
                </form>
                <div>
                <button className="bg-blue-800 text-white rounded transition duration-300 py-2 px-4 hover:bg-blue-950 shadow-lg">Buat Diskusi Baru</button>
                </div>
            </section>
            <section className="flex flex-col gap-10 p-20">
                <div className="flex justify-between items-center border border-gray-600 rounded-lg shadow-xl p-5">
                    <div className="flex flex-col gap-5">
                        <div>
                        <p>27.08.2022, 09.30 PM</p>
                        <p className="text-blue-600">Ahmad Na Jaemin</p>
                        </div>
                        <div>
                            <p>Hi! Thanks for following our store, we have a special promo for you, please check terms and condition right here</p>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                </div>
                <div className="flex justify-between items-center border border-gray-600 rounded-lg shadow-xl p-5">
                    <div className="flex flex-col gap-5">
                        <div>
                        <p>27.08.2022, 09.30 PM</p>
                        <p className="text-blue-600">Ahmad Na Jaemin</p>
                        </div>
                        <div>
                            <p>Hi! Thanks for following our store, we have a special promo for you, please check terms and condition right here</p>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                </div>
                <div className="flex justify-between items-center border border-gray-600 rounded-lg shadow-xl p-5">
                    <div className="flex flex-col gap-5">
                        <div>
                        <p>27.08.2022, 09.30 PM</p>
                        <p className="text-blue-600">Ahmad Na Jaemin</p>
                        </div>
                        <div>
                            <p>Hi! Thanks for following our store, we have a special promo for you, please check terms and condition right here</p>
                        </div>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Forum