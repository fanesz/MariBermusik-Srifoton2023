import { useParams } from "react-router-dom";
import { getMateriByAlatMusik, getUser } from "../api/services";
import gitar from "../assets/gitar.jpg";
import drum from "../assets/drum.jpg";
import piano from "../assets/piano.jpg";
import profile from "../assets/profile.png";
import notFound from "../assets/notFound.gif";
import { useEffect, useState } from "react";
import { FunnelIcon, MagnifyingGlassIcon, ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { StarIcon } from "@heroicons/react/24/solid";


const DaftarKursusByAlatMusik = () => {

  const { id } = useParams();

  const [materi, setMateri] = useState<any[]>([]);
  const [user, setUser] = useState<any[]>([]);
  const [pilihan,setPilihan] = useState([]);

  const fetchData = async () => {
    const res = await getMateriByAlatMusik(id);
    if (res.status) setMateri(res.data);setPilihan(res.data);
    // console.log(res.data);
  }

  const fetchData2 = async () => {
    const res = await getUser();
    if (res.status) setUser(res.data);
    // console.log(res.data);
  }

  useEffect(() => {
    fetchData();
    fetchData2();
  }, []);

  type IFilter = {
    nama: string;
    isi:any;
  }

  const filter: IFilter[] = [
    {
      nama: "Semua",
      isi:materi
    },
    {
      nama: "Pemula",
      isi:materi.filter((filter)=>filter.materiID===0)

    },
    {
      nama: "Menengah",
      isi:materi.filter((filter)=>filter.materiID===1)
    },
    {
      nama: "Sepuh",
      isi:materi.filter((filter)=>filter.materiID===2)
    },
    {
      nama: "Rating",
      isi:materi
    },
    {
      nama: "Pengunjung",
      isi:materi
    },
    {
      nama: "Waktu",
      isi:materi
    }
  ]

  const [namaFilter,setNamaFilter]=useState("");
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
                <MagnifyingGlassIcon className="h-6"/>
              </div>
              <input type="search" id="cari" className="block w-full p-4 pl-10 text-sm text-black border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-600" placeholder="Cari materi ..." required/>
              <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 transition hover:scale-105 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
            </div>
          </div>

          <div className="mt-8 border border-gray-500 rounded-md">
            {/* filter */}
            <div className="flex items-center p-2">
            <FunnelIcon className="h-9" />
            <span>Filter&nbsp;</span><span className={`${namaFilter?"bg-yellow-700":""} p-2 rounded-lg`}>{namaFilter?`berdasarkan ${namaFilter}`:""}</span> 
            </div>
            <div className="h-fit md:order-last py-3">
              <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-2">
              {filter.map((filter,index)=>(
                <button className={`shadow-xl p-2 border border-gray-700 bg-gray-300 rounded-full cursor-pointer transform hover:scale-105 active:scale-95 transition-all bg-gradient-to-r hover:from-gray-700 focus:from-gray-700 hover:to-gray-400 focus:to-gray-400 bg-size-200 bg-pos-0 hover:bg-pos-100 focus:ring focus:ring-black`} key={index} onClick={()=>{setPilihan(filter.isi);setNamaFilter(filter.nama)}}>
                  <div className="text-black rounded p-3 text-center text-sm">{filter.nama}</div>
                </button>
              ))}
              </div>
            </div>
            {/* materi */}
            <div className="md:border-double md:border-4 md:border-black md:border-t-0 md:border-l-1 md:border-r-1 md:border-b-0">
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
                    <StarIcon className="h-6 text-yellow-500"/>
                    <div>{materi.data.rating.reduce((a, b) => a + b, 0)/materi.data.rating.length}</div>
                  </div>
                  <div>{new Date(materi.data.createdAt).toLocaleDateString()}</div>
                  </div>
                {materi.data.daftarMateri.map((daftarMateri,index)=>(
                  <div className="flex justify-center mb-5 h-fit transform active:scale-95 transition hover:scale-105" key={index}>
                    <div>
                    <div className={`absolute bg-${materi.data.tingkatan=="pemula"?"green":materi.data.tingkatan=="menengah"?"yellow":"red"}-500 rounded-lg z-10 p-3 mx-auto`}>{materi.data.tingkatan.toUpperCase()}</div>
                    <img src={id=="gitar"?gitar:id=="drum"?drum:piano} alt={`${id}`} className="rounded-s-lg relative overflow-auto max-h-60" />
                    </div>
                    <div className={`p-5 border border-gray-600 shadow-lg rounded-e-lg bg-gray-100`}>
                      <div className="flex items-center gap-3">
                        <img src={profile} alt="profile" className="w-10" />
                        <p className="text-gray-400">{user.filter((filter)=>filter.id==materi.owner)[0].value.username}</p>
                      </div>
                      <div>
                        <p className="text-xl my-2">{daftarMateri.judul}</p>
                        <ArrowSmallRightIcon className="h-6 text-red-400 hover:bg-orange-400 rounded-lg cursor-pointer"/>
                      </div>
                    </div>
                  </div>
                ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default DaftarKursusByAlatMusik