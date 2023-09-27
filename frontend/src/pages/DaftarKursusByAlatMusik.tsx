import { useParams } from "react-router-dom";
import { getMateriByAlatMusik } from "../api/services";
import gitar from "../assets/gitar.jpg";
import profile from "../assets/profile.png";
import { useEffect, useState } from "react";


const DaftarKursusByAlatMusik = () => {

  const { id } = useParams();

  const [materi, setMateri] = useState<[]>([]);

  const fetchData = async () => {
    const res = await getMateriByAlatMusik(id);
    if (res.status) setMateri(res.data);
    console.log(res.data);

  }

  useEffect(() => {
    fetchData();
  }, []);

  // return (<></>)
  return (
    <div className="border border-blue-300 w-[55vw] ms-auto me-auto pt-10">



      <div className="text-2xl border border-red-300">
        <span>Daftar Kursus</span>
      </div>

      <div className="border border-black mt-8">

        <div>
          <div className="border border-orange-600">
            Search bar
          </div>

          <div className="mt-8 border border-green-500 flex">

            <div className="border border-black w-4/6">
              {[...Array(50)].map((item, index) => (
                <div>
                  tes
                </div>
              ))}
            </div>

            <div className="border border-blue-900 w-2/6 h-fit">
              filter
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