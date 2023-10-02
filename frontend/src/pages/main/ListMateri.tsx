import { useEffect, useState } from "react"
import { getAlatMusikList, getMateriByAlatMusik } from "../../api/services";
import MateriPreview from "../../components/Materi/MateriPreview";
import { TListMateri } from "../../types/Materi";
import { ChevronDownIcon, FunnelIcon } from "@heroicons/react/24/solid";
import { Listbox, Transition } from "@headlessui/react";

type TCurrentValue = {
  id: string,
  value: TListMateri[]
}
type TListAlatMusik = {
  key: number,
  data: {
    id: string,
    totalMateri: number
  }
}
type TAccListMateri = {
  key: number,
  data: TListMateri[]
}

const ListMateri = () => {
  const [materi, setMateri] = useState([]);
  const [tempMateri, setTempMateri] = useState<TListMateri[]>([] as TListMateri[]);
  const [listAlatMusik, setListAlatMusik] = useState<TListAlatMusik[]>([]);
  const [filterBy, setFilterBy] = useState({
    date_newest: false,
    date_oldest: false,
    rating_highest: false,
    rating_lowest: false,
    pengunjung_most: false,
    pengunjung_least: false,
    alatMusik: "semua",
  })

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMateriByAlatMusik();
      const result = res.data.reduce((ac: TAccListMateri[], cv: TCurrentValue) => {
        return ac.concat({ key: 0, data: cv.value });
      }, []);
      setMateri(result);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAlatMusikList();
      if (res.status) {
        setListAlatMusik([
          { key: 0, id: "semua", totalMateri: -1 },
          res.data.reduce((ac: TListMateri[], cv: TCurrentValue) => {

            return ac.concat(cv.value);
          }, [])
        ]);
      }
    }
    fetchData();
    return (
      setListAlatMusik([{ key: 0, data: { id: "semua", totalMateri: -1 } }])
    )
  }, [])

  const filterByDate = (reverse: boolean) => {
    setMateri(
      prev => [...prev].sort((a: TListMateri, b: TListMateri) => {
        const dateA = new Date(a.data.createdAt).getTime();
        const dateB = new Date(b.data.createdAt).getTime();
        return reverse ? dateA - dateB : dateB - dateA;
      })
    )
  }
  const filterByRating = (reverse: boolean) => {
    setMateri(
      prev => [...prev].sort((a: TListMateri, b: TListMateri) => {
        const ratingA = a.data.rating.reduce((ac: number, cv: number) => ac + cv, 0) / a.data.rating.length
        const ratingB = b.data.rating.reduce((ac: number, cv: number) => ac + cv, 0) / b.data.rating.length

        return reverse ? ratingA - ratingB : ratingB - ratingA;
      })
    )
  }
  const filterByKesulitan = (kesulitan: string) => {
    setMateri(prev => {
      const filteredItem = prev.filter((materi: TListMateri) => {
        return materi.data.tingkatan === kesulitan;
      })
      const otherItem = prev.filter((materi: TListMateri) => {
        return materi.data.tingkatan !== kesulitan;
      })
      return filteredItem.concat(otherItem);
    })
  }
  const filterByPengunjung = (reverse: boolean) => {
    setMateri(
      prev => [...prev].sort((a: TListMateri, b: TListMateri) => {
        const pengunjungA = a.data.pengunjung;
        const pengunjungB = b.data.pengunjung;

        return reverse ? pengunjungA - pengunjungB : pengunjungB - pengunjungA;
      })
    )
  }
  const filterByAlatMusik = (e: any) => {
    console.log(e);

    // setMateri(prev => {
    //   const filteredItem = prev.filter((materi: TListMateri) => {
    //     return materi.alatMusik === alatMusik;
    //   })
    //   const otherItem = prev.filter((materi: TListMateri) => {
    //     return materi.alatMusik !== alatMusik;
    //   })
    //   return filteredItem.concat(otherItem);
    // })
  }





  const filterButtonClass = "w-fit px-3 py-1 rounded-md text-white cursor-pointer opacity-90 mt-1 shadow-sm truncate"
  const radioButtonClass = "focus:ring-0 focus:border-none focus:ring-offset-0 me-2"

  const handleRadioButton = (key: string) => {
    setFilterBy(prev => {
      return {
        ...prev,
        date_newest: false,
        date_oldest: false,
        rating_highest: false,
        rating_lowest: false,
        pengunjung_most: false,
        pengunjung_least: false,
        [key]: true
      }
    })
  }

  const filter = (
    <div className="">
      <div className="flex">
        <FunnelIcon className="w-4 h-4 mt-auto mb-auto me-1" />
        <div className="text-lg font-medium text-gray-700">
          Filter
        </div>
      </div>

      <div className="border border-gray-400 rounded-md px-5 pe-8 py-2 pb-4 shadow-md mt-1">

        <div>
          <div>
            Alat Musik
          </div>
          <div>
            <Listbox value={listAlatMusik.key}>
              <Listbox.Button className="w-full py-1 text-start px-3 border border-gray-600 rounded-md cursor-pointer flex justify-between shadow-sm">
                <div>
                  Semua
                </div>
                <ChevronDownIcon className="w-4 h-4 mt-auto mb-auto" />
              </Listbox.Button>
              <Transition
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <Listbox.Options className="border border-gray-400 rounded-b-md mt-2 cursor-pointer shadow-sm">
                  {listAlatMusik.map((alatMusik, index) => (
                    <div key={index}
                      // onClick={() => filterByAlatMusik(alatMusik.id)}
                      className={`px-3 py-1 hover:bg-gray-100 ${index !== listAlatMusik.length - 1 && "border-b border-gray-400"} ${filterBy.alatMusik === alatMusik.data.id && "bg-gray-200"}`}>
                      {alatMusik.data.id}
                    </div>
                  ))}
                </Listbox.Options>
              </Transition>
            </Listbox>


          </div>
        </div>

        <div className="mt-2">
          <div>
            Tanggal Upload
          </div>
          <div className="" onClick={() => handleRadioButton('date_newest')}>
            <input className={radioButtonClass} type="radio" checked={filterBy.date_newest} />
            <label className="text-gray-800">Terbaru</label>
          </div>
          <div onClick={() => handleRadioButton('date_oldest')}>
            <input className={radioButtonClass} type="radio" checked={filterBy.date_oldest} />
            <label className="text-gray-800">Terlama</label>
          </div>
        </div>

        <div className="mt-2">
          <div>
            Rating
          </div>
          <div className="" onClick={() => handleRadioButton('rating_highest')}>
            <input className={radioButtonClass} type="radio" checked={filterBy.rating_highest} />
            <label className="text-gray-800">Tertinggi</label>
          </div>
          <div onClick={() => handleRadioButton('rating_lowest')}>
            <input className={radioButtonClass} type="radio" checked={filterBy.rating_lowest} />
            <label className="text-gray-800">Terendah</label>
          </div>
        </div>

        <div className="mt-2">
          <div>
            Pengunjung
          </div>
          <div className="" onClick={() => handleRadioButton('pengunjung_most')}>
            <input className={radioButtonClass} type="radio" checked={filterBy.pengunjung_most} />
            <label className="text-gray-800">Terbanyak</label>
          </div>
          <div onClick={() => handleRadioButton('pengunjung_least')}>
            <input className={radioButtonClass} type="radio" checked={filterBy.pengunjung_least} />
            <label className="text-gray-800">Tersedikit</label>
          </div>
        </div>

        <div className="mt-2">
          <div>
            Kesulitan
          </div>
          <div className={`${filterButtonClass} bg-green-400 hover:bg-green-600`} onClick={() => filterByKesulitan("pemula")}>
            Pemula
          </div>
          <div className={`${filterButtonClass} bg-orange-400 hover:bg-orange-600`} onClick={() => filterByKesulitan("menengah")}>
            Menengah
          </div>
          <div className={`${filterButtonClass} bg-red-400 hover:bg-red-600`} onClick={() => filterByKesulitan("sulit")}>
            Sulit
          </div>
        </div>

      </div>
    </div>
  )


  return (
    <div className="w-full max-w-7xl transform ms-auto me-auto mt-20">
      <div>
        <div className="text-center text-2xl font-semibold text-gray-700">
          Materi
        </div>
        <div className="flex ms-20 mt-5">

          <div className="w-4/6 p-4">
            {materi.map((materi, index) => (
              <MateriPreview key={index}
                className='mb-5'
                materi={materi}
              />
            ))}
          </div>

          <div className="p-4">
            <div className="px-3 py-1.5 mb-3 rounded-md text-white text-lg text-center bg-green-400 hover:bg-green-500 shadow-md cursor-pointer">
              Buat Materi
            </div>
            <div>
              {filter}
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default ListMateri