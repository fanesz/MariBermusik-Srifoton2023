import { useParams } from "react-router-dom";
import { getMateriByAlatMusik } from "../api/services";
import gitar from "../assets/gitar.jpg";
import profile from "../assets/profile.png";
import notFound from "../assets/notFound.gif";
import { useEffect, useState } from "react";


const DaftarKursusByAlatMusik = () => {

  const { id } = useParams();

  const [materi, setMateri] = useState<any[]>([]);
  const [pilihan,setPilihan] = useState([]);

  const fetchData = async () => {
    const res = await getMateriByAlatMusik(id);
    if (res.status) setMateri(res.data);setPilihan(res.data);
    // console.log(res.data);
  }

  useEffect(() => {
    fetchData();
  }, []);

  type ITingkatKesulitan = {
    judul: string;
    warna: string;
  }

  const tingkatKesulitan: ITingkatKesulitan[] = [
    {
      judul: "Pemula",
      warna: "green"
    },
    {
      judul: "Menengah",
      warna: "yellow"
    },
    {
      judul: "Sepuh",
      warna: "red"
    }
  ]

  

  // console.log(pilihan)
  return (
    
    <div className="border border-blue-300 w-[55vw] ms-auto me-auto pt-10">



      <div className="text-2xl border border-red-300">
        <span>Daftar Kursus</span>
      </div>

      <div className="border border-black mt-8">

        <div>
          <div className="p-4">
          <label htmlFor="cari" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
              </div>
              <input type="search" id="cari" className="block w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-600" placeholder="Cari materi ..." required/>
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 transition hover:scale-105 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
          </div>

          <div className="mt-8 border border-green-500 flex">
            <div className="border border-black w-4/6">
              {pilihan.length==0?(
              <div className="flex flex-col text-center text-lg items-center font-bold p-5">
                Data tidak ditemukan
                <img src={notFound} alt="dataNotFound" className="h-40 rounded-s-lg" />
              </div>):pilihan?.map((materi, index) => 
              (
                <div key={index}>
                {materi.data.daftarMateri.map((daftarMateri,index)=>(
                  <div className="flex justify-center mb-5" key={index}>
                    <img src={gitar} alt="gitar" className="h-40 rounded-s-lg" />
                    <div className="p-5 border border-gray-600 shadow-lg rounded-e-lg w-[30vw]">
                      <div className="flex items-center gap-3">
                        <img src={profile} alt="profile" className="w-10" />
                        <p className="text-gray-400">{materi.owner}</p>
                      </div>
                      <div>
                        <p className="text-xl my-2">{daftarMateri.judul}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-600"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              ))}
            </div>

            <div className="border border-blue-900 w-2/6 h-fit">
              <div className="flex flex-col gap-5 p-2 border border-yellow-500">
              {tingkatKesulitan.map((item,index)=>(
                <div className={`shadow-xl border border-gray-500 bg-${item.warna}-500 rounded-full cursor-pointer hover:scale-105 transition-all`} key={index} onClick={()=>setPilihan(materi.filter((filter)=>filter.materiID===index))}>
                  <div className="text-white rounded p-3 text-center text-sm">{item.judul}</div>
                </div>
              ))}
              </div>
            </div>
          </div>





          {/* {materi.map((materi, index) => (
            <div key={index}>
              {materi.data.map((data, index) => (
                <div className="flex justify-center mb-5" key={index}>
                  <img src={gitar} alt="gitar" className="h-40 rounded-s-lg" />
                  <div className="p-5 border border-gray-600 shadow-lg rounded-e-lg w-[30vw]">
                    <div className="flex items-center gap-3">
                      <img src={profile} alt="profile" className="w-10" />
                      <p className="text-gray-400">{materi.owner}</p>
                    </div>
                    <div>
                      <p className="text-xl my-2">{data.judul}</p>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-red-600"><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" /></svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))} */}
        </div>
      </div>
    </div>
  )

}

export default DaftarKursusByAlatMusik