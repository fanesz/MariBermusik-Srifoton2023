import gitar from "../../assets/gitar.jpg";
import profile from "../../assets/profile.png";
import { Menu, Transition } from '@headlessui/react';
import { Link } from "react-router-dom";
import { useState } from "react";

type TTingkatKesulitan = {
    judul: string;
    deskripsi: string[];
    warna: string;
}

type TMateri = {
  id: number;
  owner: string;
  data: any;
}

const UUID = "88ba3d39-2af4-4526-8ab2-97d8b470d061";
const UUID2 = "59d1756f-5259-4527-bc72-640db97372b5";

const Kategori = () => {
    const tingkatKesulitan: TTingkatKesulitan[] = [
        {
          judul: "Pemula",
          deskripsi: [
            "Details",
            "Gitar adalah alat musik"
          ],
          warna: "green"
        },
        {
          judul: "Menengah",
          deskripsi: [
            "Details",
            "Mengenal kunci gitar"
          ],
          warna: "yellow"
        },
        {
          judul: "Tingkat Lanjut",
          deskripsi: [
            "Details",
            "Teknik-teknik gitar"
          ],
          warna: "red"
        }
      ]

      const materi: TMateri[] = [
        {
          id: 0,
          owner: UUID,
          data: [
              {
                "id": 0,
                "judul": "Sejarah Gitar",
                "deskripsi": "Mempelajari sejarah gitar",
                "tingkatan": "pemula",
                "materi": "lorem",
                "rating": [4, 5, 3, 4, 2, 3],
                "pengunjung": 12,
                "createdAt": new Date(),
                "link": [
                  "https://youtube.com/",
                  "https://youtube.com/"
                ]
              },
              {
                "id": 1,
                "judul": "Pencipta Gitar",
                "deskripsi": "Mempelajari pencipta gitar",
                "tingkatan": "pemula",
                "materi": "lorem",
                "rating": [4, 5, 2, 2],
                "link": [
                  "https://youtube.com/",
                  "https://youtube.com/"
                ]
              } 
            ],
        },
        {
          id: 1,
          owner: UUID2,
          data: [   
              {
                "id": 0,
                "judul": "Apa itu Kunci Gantung",
                "deskripsi": "Mempelajari Kunci gantung gitar",
                "tingkatan": "menengah",
                "materi": "lorem",
                "rating": [4, 4, 4, 5, 5],
                "pengunjung": 5,
                "createdAt": new Date(),
                "link": [
                  "https://youtube.com/",
                  "https://youtube.com/"
                ]
              },
              {
                "id": 1,
                "judul": "Cara memainkan Kunci Gantung",
                "deskripsi": "Mempelajari memainkan kunci gantung gitar",
                "tingkatan": "menengah",
                "materi": "lorem",
                "rating": [4, 4, 3, 4],
                "pengunjung": 8,
                "createdAt": new Date(),
                "link": [
                  "https://youtube.com/",
                  "https://youtube.com/"
                ]
              },
              {
                "id": 2,
                "judul": "Kesalahan dalam memainkan Kunci Gantung",
                "deskripsi": "Mempelajari kesalahan dalam memainkan kunci gantung gitar",
                "tingkatan": "menengah",
                "materi": "lorem",
                "rating": [4, 3, 4, 3, 5],
                "pengunjung": 2,
                "createdAt": new Date(),
                "link": [
                  "https://youtube.com/",
                  "https://youtube.com/"
                ]
              }
          ]
        },
        {
          id: 2,
          owner: UUID,
          data: [
              {
                "id": 0,
                "judul": "Teknik-teknik bermain gitar",
                "deskripsi": "Mempelajari macam-macam teknik bermain gitar",
                "tingkatan": "tingkat lanjut",
                "materi": "lorem",
                "rating": [5, 4, 5],
                "pengunjung": 2,
                "createdAt": new Date(),
                "link": [
                  "https://youtube.com/",
                  "https://youtube.com/"
                ]
              },
          ]
        }
      ]

      const [pilihan,setPilihan] = useState(materi.filter((filter)=>filter.id===0));
    
      return (
        <div className="border border-blue-300 px-16 pt-10">
    
          {/* judul */}
          <div className="text-2xl border border-red-300">
            <span>Daftar Kursus</span>
          </div>
    
          <div className="border border-black mt-8">
    
            {/* tingkat kesulitan */}
            <div className="flex justify-center gap-16 border border-yellow-500">
              {tingkatKesulitan.map((item, index) => (
                <div className="shadow-xl border border-gray-500 rounded cursor-pointer hover:scale-105 transition-all" key={index} onClick={()=>setPilihan(materi.filter((filter)=>filter.id===index))}>
                  <div className={`text-white bg-${item.warna}-500 rounded p-5 text-center`}>{item.judul}</div>
                  {item.deskripsi.map((item, index) => (
                    <div className="p-5" key={index}>{item}</div>
                  ))}
                </div>
              ))}
            </div>
    
            {/* kursus */}
            <div className="mt-10 border border-green-500">
              {pilihan.map((materi, index) => (
                <div key={index}>
                {materi.data.map((data,index)=>(
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
              ))}
            </div>
          </div>
        </div>
      )
}

export default Kategori;