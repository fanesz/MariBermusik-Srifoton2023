import { useParams } from "react-router-dom";
import { getMateriByAlatMusik, getUser } from "../api/services";
import gitar from "../assets/gitar.jpg";
import profile from "../assets/profile.png";
import notFound from "../assets/notFound.gif";
import { useEffect, useState } from "react";


const DaftarKursusByAlatMusik = () => {

  const { id } = useParams();

  const [materi, setMateri] = useState<any[]>([]);
  const [user, setUser] = useState<any[]>([]);
  const [pilihan,setPilihan] = useState([]);

  const fetchData = async () => {
    const res = await getMateriByAlatMusik(id);
    if (res.status) setMateri(res.data);setPilihan(res.data);
    console.log(res.data);
  }

  const fetchData2 = async () => {
    const res = await getUser();
    if (res.status) setUser(res.data);
    console.log(res.data);
  }

  useEffect(() => {
    fetchData();
    fetchData2();
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

  type IFilter = {
    nama: string;
  }

  const filter: IFilter[] = [
    {
      nama: "Rating"
    },
    {
      nama: "Pengunjung"
    },
    {
      nama: "Waktu"
    }
  ]

  // console.log(pilihan)
  return (
    
    <div className="w-[70vw] ms-auto me-auto pt-10">



      <div className="text-2xl">
        <span>Daftar Kursus</span>
      </div>

      <div className="mt-8">
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

          <div className="mt-8 border border-gray-500 flex rounded-md">
            {/* filter */}
            <div className="md:w-2/6 h-fit md:order-last py-3">
              <div className="flex flex-col gap-5 p-2">
              <div className={`shadow-xl p-2 border border-gray-700 bg-gray-300 rounded-full cursor-pointer transform hover:scale-105 active:scale-95 transition-all active:bg-gray-700`} onClick={()=>setPilihan(materi)}>
                  <div className="text-black rounded p-3 text-center text-sm">Semua</div>
                </div>
              {tingkatKesulitan.map((item,index)=>(
                <div className={`shadow-xl p-2 border border-gray-700 bg-gray-300 rounded-full cursor-pointer transform hover:scale-105 active:scale-95 transition-all active:bg-${item.warna}-700`} key={index} onClick={()=>setPilihan(materi.filter((filter)=>filter.materiID===index))}>
                  <div className="text-black rounded p-3 text-center text-sm">{item.judul}</div>
                </div>
              ))}
                {filter.map((filter,index)=>(
                  <div key={index} className="shadow-xl p-2 border border-gray-700 bg-gray-300 rounded-full cursor-pointer transform hover:scale-105 active:scale-95 transition-all active:bg-gray-700">
                    <div className="text-black rounded p-3 text-center text-sm">{filter.nama}</div>
                  </div>
                  ))}
              </div>
            </div>
            {/* materi */}
            <div className="md:w-4/6 md:border-double md:border-4 md:border-black md:border-t-0 md:border-l-0 md:border-r-1 md:border-b-0">
              {pilihan.length==0?(
              <div className="flex flex-col text-center text-lg items-center font-bold p-5">
                Data tidak ditemukan
                <img src={notFound} alt="dataNotFound" className="h-40 rounded-s-lg" />
              </div>):pilihan?.map((materi, index) => 
              (
                <div key={index}>
                  <div className="text-center py-5 mb-2 border-dashed border-2 border-black border-t-1 md:border-l-0 md:border-r-0 md:border-b-1">
                  <div className="text-2xl">{materi.data.nama}</div>
                  <div>{materi.data.deskripsi}</div>
                  <div className="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <div>{materi.data.rating.reduce((a, b) => a + b, 0)/materi.data.rating.length}</div>
                  </div>
                  <div>{materi.data.createdAt}</div>
                  </div>
                {materi.data.daftarMateri.map((daftarMateri,index)=>(
                  <div className="flex justify-center mb-5 h-fit transform active:scale-95 transition hover:scale-105" key={index}>
                    <img src={gitar} alt="gitar" className="rounded-s-lg relative overflow-auto max-h-60" />
                    <div className={`p-5 border border-gray-600 shadow-lg rounded-e-lg bg-${materi.data.tingkatan=="pemula"?"green":materi.data.tingkatan=="menengah"?"yellow":"red"}-500`}>
                      <div className="flex items-center gap-3">
                        <img src={profile} alt="profile" className="w-10" />
                        <p className="text-gray-400">{user.filter((filter)=>filter.id==materi.owner)[0].value.username}</p>
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