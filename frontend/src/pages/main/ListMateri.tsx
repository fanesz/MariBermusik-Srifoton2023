import { Fragment, useEffect, useState } from "react"
import { getAlatMusikList, getMateriByAlatMusik } from "../../api/services";
import MateriPreview from "../../components/Materi/MateriPreview";
import { TListMateri } from "../../types/Types";
import { ChevronDownIcon, FunnelIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Dialog, Listbox, Transition } from "@headlessui/react";
import CreateMateriModal from "../../components/Materi/CreateMateriModal";
import Input from "../../components/_shared/Input";
import { Button } from "@material-tailwind/react";
import TransitionIn from "../../components/_shared/TransitionIn";

type TCurrentValue = {
  id: string,
  value: TListMateri[]
}
type TListAlatMusik = {
  id: string,
  totalMateri: number
}
type TFilterBy = {
  date_newest: boolean,
  date_oldest: boolean,
  rating_highest: boolean,
  rating_lowest: boolean,
  pengunjung_most: boolean,
  pengunjung_least: boolean,
  alatMusik: string
}

const ListMateri = () => {
  const [materi, setMateri] = useState<TListMateri[]>([]);
  const [listAlatMusik, setListAlatMusik] = useState<TListAlatMusik[]>([]);
  const [filterBy, setFilterBy] = useState<TFilterBy>({
    date_newest: false,
    date_oldest: false,
    rating_highest: false,
    rating_lowest: false,
    pengunjung_most: false,
    pengunjung_least: false,
    alatMusik: "semua",
  })
  const [filterModal, setFilterModal] = useState(false);
  const [createMateriModal, setCreateMateriModal] = useState(false);
  const [cariMateri, setCariMateri] = useState('');


  // mendapatkan semua data materi dan list alat musik
  const fetchMateri = async () => {
    const res = await getMateriByAlatMusik();
    if (res.status) {
      const result = res.data.reduce((ac: TListMateri[], cv: TCurrentValue) => {
        return ac.concat(cv.value);
      }, []);
      setMateri(result);
    }
  }
  const fetchListAlatMusik = async () => {
    const res = await getAlatMusikList();
    if (res.status) {
      setListAlatMusik([{ id: 'semua', totalMateri: -1 }, ...res.data]);
    }
  }
  useEffect(() => {
    fetchMateri();
    fetchListAlatMusik();
  }, [])


  // filtering function
  const handleFilteringMateri = (filterer: (a: TListMateri, b: TListMateri) => number) => {
    setMateri(
      prev => {
        if (filterBy.alatMusik === "semua") {
          return prev.sort(filterer);
        } else {
          const filtered = prev.filter((materi: TListMateri) => materi.alatMusik === filterBy.alatMusik).sort(filterer);
          const unfiltered = prev.filter((materi: TListMateri) => materi.alatMusik !== filterBy.alatMusik);
          return filtered.concat(unfiltered);
        }
      }
    )
  }
  const filterByAlatMusik = (alatMusik: string) => {
    setMateri(prev => {
      const filteredItem = prev.filter((materi: TListMateri) => materi.alatMusik === alatMusik);
      const otherItem = prev.filter((materi: TListMateri) => materi.alatMusik !== alatMusik);
      return filteredItem.concat(otherItem);
    });
    setFilterBy(prev => {
      return {
        ...prev,
        alatMusik: alatMusik
      }
    });
  }
  const filterByDate = (reverse: boolean) => {
    const sort = (a: TListMateri, b: TListMateri) => {
      const dateA = new Date(a.data.createdAt).getTime();
      const dateB = new Date(b.data.createdAt).getTime();
      return reverse ? dateA - dateB : dateB - dateA;
    }
    handleFilteringMateri(sort);
  }
  const filterByRating = (reverse: boolean) => {
    const sort = (a: TListMateri, b: TListMateri) => {
      const ratingA = a.data.rating.reduce((ac: number, cv: number) => ac + cv, 0) / a.data.rating.length
      const ratingB = b.data.rating.reduce((ac: number, cv: number) => ac + cv, 0) / b.data.rating.length
      return reverse ? ratingA - ratingB : ratingB - ratingA;
    }
    handleFilteringMateri(sort);
  }
  const filterByPengunjung = (reverse: boolean) => {
    const sort = (a: TListMateri, b: TListMateri) => {
      const pengunjungA = a.data.pengunjung;
      const pengunjungB = b.data.pengunjung;
      return reverse ? pengunjungA - pengunjungB : pengunjungB - pengunjungA;
    }
    handleFilteringMateri(sort);
  }
  const filterByKesulitan = (kesulitan: string) => {
    setMateri(prev => {
      const filteredItem = prev.filter((materi: TListMateri) => materi.data.tingkatan === kesulitan.toLowerCase());
      const otherItem = prev.filter((materi: TListMateri) => materi.data.tingkatan !== kesulitan.toLowerCase());
      return filteredItem.concat(otherItem);
    });
  };


  // handle radio button filter
  const handleRadioButton = (key: string) => {
    if (key === "date_newest") {
      filterByDate(false);
    } else if (key === "date_oldest") {
      filterByDate(true);
    } else if (key === "rating_highest") {
      filterByRating(false);
    } else if (key === "rating_lowest") {
      filterByRating(true);
    } else if (key === "pengunjung_most") {
      filterByPengunjung(false);
    } else if (key === "pengunjung_least") {
      filterByPengunjung(true);
    }
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
    });
  }


  // handle cari materi
  const handleSetCariMateri = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCariMateri(e.target.value);
    setMateri(prev => {
      const filteredItem = prev.filter((materi: TListMateri) => materi.data.nama.toLowerCase().includes(e.target.value.toLowerCase()));
      const otherItem = prev.filter((materi: TListMateri) => !materi.data.nama.toLowerCase().includes(e.target.value.toLowerCase()));
      return filteredItem.concat(otherItem);
    });
  }


  // Components
  const filterByOption = [
    {
      title: 'Tanggal Upload', data: [
        { key: 'date_newest', text: 'Terbaru' }, { key: 'date_oldest', text: 'Terlama' }
      ]
    },
    {
      title: 'Rating', data: [
        { key: 'rating_highest', text: 'Tertinggi' }, { key: 'rating_lowest', text: 'Terendah' }
      ]
    },
    {
      title: 'Pengunjung', data: [
        { key: 'pengunjung_most', text: 'Terbanyak' }, { key: 'pengunjung_least', text: 'Tersedikit' }
      ]
    },
  ]
  const filter_alatMusik = (
    <div>
      <div>
        Alat Musik
      </div>
      <div>
        <Listbox value={listAlatMusik} onChange={() => setListAlatMusik}>
          <Listbox.Button className="w-full py-1 text-start px-3 border border-gray-600 rounded-md cursor-pointer flex justify-between shadow-sm">
            <div>
              {filterBy.alatMusik.charAt(0).toUpperCase() + filterBy.alatMusik.slice(1)}
            </div>
            <ChevronDownIcon className="w-4 h-4 mt-auto mb-auto" />
          </Listbox.Button>
          <Transition
            enter="transition-transform origin-top duration-300"
            enterFrom="scale-y-0"
            enterTo="scale-y-100"
            leave="transition-transform origin-top duration-300"
            leaveFrom="scale-y-100"
            leaveTo="scale-y-0">
            <Listbox.Options className="border border-gray-400 rounded-b-md mt-2 cursor-pointer shadow-lg absolute bg-white w-full opacity-90">
              {listAlatMusik.map((alatMusik, index) => (
                <Listbox.Option key={index} value={alatMusik.id}
                  onClick={() => filterByAlatMusik(alatMusik.id)}
                  className={`px-3 py-1 hover:bg-gray-100 ${index !== listAlatMusik.length - 1 && "border-b border-gray-400"} ${filterBy.alatMusik === alatMusik.id && "bg-gray-200"}`}>
                  {alatMusik.id.charAt(0).toUpperCase() + alatMusik.id.slice(1) + (alatMusik.totalMateri !== -1 ? ` (${alatMusik.totalMateri})` : '')}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>
    </div>
  )
  const filter_data = (
    <div>
      {filterByOption.map((items, index) => (
        <div key={index} className="mt-3">
          <div>
            {items.title}
          </div>
          {items.data.map((item, index) => (
            <div key={index} className="" onClick={() => handleRadioButton(item.key)}>
              <input className="focus:ring-0 focus:border-none focus:ring-offset-0 me-2" type="radio" checked={!!filterBy[item.key as keyof TFilterBy]} onChange={() => handleRadioButton(item.key)} />
              <label className="text-gray-800">{item.text}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
  const filter_kesulitan = (
    <div>
      <div>
        Kesulitan
      </div>
      {[
        ['Pemula', 'bg-green-400 hover:bg-green-600'],
        ['Menengah', 'bg-orange-400 hover:bg-orange-600'],
        ['Sulit', 'bg-red-400 hover:bg-red-600']
      ].map((item, index) => (
        <div key={index} className={`w-fit px-3 py-1 rounded-md text-white cursor-pointer opacity-90 mt-1 shadow-sm truncate ${item[1]}`} onClick={() => filterByKesulitan(item[0])}>
          {item[0]}
        </div>
      ))}
    </div>
  )
  const filter_menu = (
    <div className="">
      <div className="md:flex hidden">
        <FunnelIcon className="w-4 h-4 mt-auto mb-auto me-1" />
        <div className="text-lg font-medium text-gray-700">
          Filter
        </div>
      </div>
      <div className="border border-gray-400 w-full rounded-md px-5 pe-8 py-2 pb-4 shadow-md mt-1">

        <div>
          {filter_alatMusik}
        </div>

        <div>
          {filter_data}
        </div>

        <div className="mt-2">
          {filter_kesulitan}
        </div>

      </div>
    </div >
  )
  const button_buat_materi = (
    <div
      className="group relative py-2 overflow-hidden rounded-lg bg-white text-lg shadow-md text-center cursor-pointer"
      onClick={() => setCreateMateriModal(true)}>
      <div className="absolute inset-0 md:w-3 bg-green-400 transition-all duration-500 ease-out group-hover:w-full"></div>
      <span className="relative md:text-gray-800 text-white group-hover:text-white transition-colors duration-300">Buat Materi</span>
    </div>
  )
  const modal_filter = (
    <Transition
      appear show={filterModal} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => { setFilterModal(false) }}>
        <Transition.Child as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full h-fit transform overflow-hidden rounded-2xl bg-gray-200 px-5 py-4 text-left align-middle shadow-xl transition-all">

                <Dialog.Title className="text-lg text-center font-semibold text-gray-600">
                  <div className="flex justify-between">
                    <div className='w-full'>
                      Filter
                    </div>
                    <div className='mt-auto mb-auto'>
                      <XMarkIcon className="h-5 cursor-pointer hover:bg-gray-300 rounded" onClick={() => setFilterModal(false)} />
                    </div>
                  </div>
                </Dialog.Title>

                <div className="rounded-md mt-2 bg-white bg-opacity-70 p-5 ">
                  <div className="">
                    {filter_menu}
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )

  return (
    <div className="w-full max-w-7xl transform ms-auto me-auto mt-20">
      <div>
        <div className="text-center text-2xl font-semibold text-gray-700">
          Materi
        </div>
        <div className="md:flex mt-5 lg:justify-end justify-center xl:pe-20 lg:pe-16">

          {modal_filter}
          <CreateMateriModal isOpen={createMateriModal} setModal={setCreateMateriModal} />

          {/* phone view */}
          <div className="p-4 md:hidden flex gap-5 px-5">
            <div className="w-4/5">
              {button_buat_materi}
            </div>
            <div className="w-1/5">
              <div
                className="flex sm:ps-5 gap-2 h-full rounded-md bg-gray-300 cursor-pointer"
                onClick={() => setFilterModal(true)}>
                <FunnelIcon className="w-5 h-5 my-auto sm:mx-0 mx-auto fill-gray-700" />
                <div className="mt-auto mb-auto sm:block hidden text-gray-700">
                  Filter
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-4/6 px-4">
            <div className="">
              <TransitionIn duration={1500}>
                <Input className='shadow-md' type='text' label='Cari Materi' icon={<MagnifyingGlassIcon />}
                  value={cariMateri} onChange={handleSetCariMateri} />
              </TransitionIn>
            </div>
            <div className="mt-5">
              <TransitionIn from='bottom' duration={1500}>
                {materi.map((materi, index) => (
                  <MateriPreview key={index}
                    className='mb-5'
                    materi={materi}
                  />
                ))}
              </TransitionIn>

            </div>
          </div>

          {/* desktop view */}
          <div className="px-4 md:block hidden">
            <TransitionIn from='right' duration={1500}>
              {button_buat_materi}
              <div className="mt-2">
                {filter_menu}
              </div>
            </TransitionIn>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ListMateri