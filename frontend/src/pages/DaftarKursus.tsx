import gitar from "../assets/gitar.jpg";
import profile from "../assets/profile.png";
import Navbar from "../components/_shared/Navbar"


const DaftarKursus = () => {
  return (
    <>
    <Navbar />
    <div className="p-10">
            <h1 className="text-3xl p-5">Gitar</h1>
            <section className="flex justify-around">
                <div className="shadow-lg border border-gray-500 rounded">
                    <p className="text-white bg-green-600 rounded p-5">Pemula</p>
                    <p className="p-5">Details</p>
                    <p className="p-5">Gitar adalah alat musik</p>
                </div>
                <div className="shadow-lg border border-gray-500 rounded">
                    <p className="text-white bg-green-600 rounded p-5">Menengah</p>
                    <p className="p-5">Details</p>
                    <p className="p-5">Mengenal kunci gitar</p>
                </div>
                <div className="shadow-lg border border-gray-500 rounded">
                    <p className="text-white bg-green-600 rounded p-5">Tingkat Lanjut</p>
                    <p className="p-5">Details</p>
                    <p className="p-5">Teknik-teknik gitar</p>
                </div>
            </section>
            <section className="py-20 flex flex-col gap-20">
                <div className="flex justify-center">
                    <img src={gitar} alt="gitar" className="h-40 rounded-s-lg"/>
                    <div className="p-5 border border-gray-600 shadow-lg rounded-e-lg">
                        <div className="flex items-center gap-3">
                            <img src={profile} alt="profile" className="w-10"/>
                            <p className="text-gray-400">Ahmad Na Jaemin</p>
                        </div>
                        <p className="text-xl my-2">Sejarah Gitar (Pemula)</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-600"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={gitar} alt="gitar" className="h-40 rounded-s-lg"/>
                    <div className="p-5 border border-gray-600 shadow-lg rounded-e-lg">
                        <div className="flex items-center gap-3">
                            <img src={profile} alt="profile" className="w-10"/>
                            <p className="text-gray-400">Ahmad Na Jaemin</p>
                        </div>
                        <p className="text-xl my-2">Sejarah Gitar (Pemula)</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-600"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                    </div>
                </div>
                <div className="flex justify-center">
                    <img src={gitar} alt="gitar" className="h-40 rounded-s-lg"/>
                    <div className="p-5 border border-gray-600 shadow-lg rounded-e-lg">
                        <div className="flex items-center gap-3">
                            <img src={profile} alt="profile" className="w-10"/>
                            <p className="text-gray-400">Ahmad Na Jaemin</p>
                        </div>
                        <p className="text-xl my-2">Sejarah Gitar (Pemula)</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-red-600"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                    </div>
                </div>
            </section>
        </div>
        </>
  )
}

export default DaftarKursus