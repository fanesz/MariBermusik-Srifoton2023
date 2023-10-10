import { Fragment, useEffect, useState } from "react"
import { getAlatMusikList, getMateriByAlatMusik, userIsLogin } from "../../api/services";
import MateriPreview from "../../components/Materi/MateriPreview";
import { TListMateri } from "../../types/Types";
import { FunnelIcon, InformationCircleIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Dialog, Transition } from "@headlessui/react";
import CreateMateriModal from "../../components/Materi/CreateMateriModal";
import Input from "../../components/_shared/Input";
import TransitionIn from "../../components/_shared/TransitionIn";
import { Option, Select } from "@material-tailwind/react";
import InfoCreateMateriModal from "../../components/Materi/InfoCreateMateriModal";

type TCurrentValue = {
  id: string,
  value: TListMateri[]
}
type TListAlatMusik = {
  id: string,
  totalMateri: number
}
type TFilterBy = {
  alatMusik: string
  date_newest: boolean,
  date_oldest: boolean,
  rating_highest: boolean,
  rating_lowest: boolean,
  pengunjung_most: boolean,
  pengunjung_least: boolean,
  kesulitan: string[]
}
type TListFilterer = {
  [key: string]: (a: TListMateri, b: TListMateri) => number;
};

const ListMateri = () => {
  const [materi, setMateri] = useState<TListMateri[]>([]);
  const [filteredMateri, setFilteredMateri] = useState<TListMateri[]>([]);
  const [listAlatMusik, setListAlatMusik] = useState<TListAlatMusik[]>([]);
  const [filterModal, setFilterModal] = useState(false);
  const [createMateriModal, setCreateMateriModal] = useState(false);
  const [infoCreateMateriModal, setInfoCreateMateriModal] = useState(false);
  const [cariMateri, setCariMateri] = useState('');
  const [isLogin, setIsLogin] = useState(false);
  const [filterBy, setFilterBy] = useState<TFilterBy>({
    alatMusik: "semua",
    date_newest: false,
    date_oldest: false,
    rating_highest: false,
    rating_lowest: false,
    pengunjung_most: false,
    pengunjung_least: false,
    kesulitan: []
  })

  // pengecekan apakah user sudah login
  useEffect(() => {
    const fetchData = async () => {
      const res = await userIsLogin();
      if (res.status) setIsLogin(true);

    }
    fetchData();
  }, []);


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
      setListAlatMusik([
        { id: 'semua', totalMateri: -1 },
        ...res.data.filter((item: TListAlatMusik) => item.totalMateri >= 1)]);
    }
  }
  useEffect(() => {
    fetchMateri();
    fetchListAlatMusik();
  }, [])


  // algoritma filtering
  const handleFilteringMateri = (filterer: TFilterBy, newestFilter: keyof TFilterBy | null, filterCondition: boolean) => {
    const filterByDate = (a: TListMateri, b: TListMateri, reverse: boolean) => {
      const dateA = new Date(a.data.createdAt).getTime();
      const dateB = new Date(b.data.createdAt).getTime();
      return reverse ? dateA - dateB : dateB - dateA;
    }
    const filterByRating = (a: TListMateri, b: TListMateri, reverse: boolean) => {
      let ratingA = 0;
      let ratingB = 0;
      for (const item of a.data.rating) {
        ratingA += item[1];
      }
      for (const item of b.data.rating) {
        ratingB += item[1];
      }
      ratingA = ratingA / a.data.rating.length
      ratingB = ratingB / b.data.rating.length
      return reverse ? ratingA - ratingB : ratingB - ratingA;
    }
    const filterByPengunjung = (a: TListMateri, b: TListMateri, reverse: boolean) => {
      const pengunjungA = a.data.pengunjung;
      const pengunjungB = b.data.pengunjung;
      return reverse ? pengunjungA - pengunjungB : pengunjungB - pengunjungA;
    }

    const listFilterer: TListFilterer = {
      date_newest: (a: TListMateri, b: TListMateri) => filterByDate(a, b, false),
      date_oldest: (a: TListMateri, b: TListMateri) => filterByDate(a, b, true),
      rating_highest: (a: TListMateri, b: TListMateri) => filterByRating(a, b, false),
      rating_lowest: (a: TListMateri, b: TListMateri) => filterByRating(a, b, true),
      pengunjung_most: (a: TListMateri, b: TListMateri) => filterByPengunjung(a, b, false),
      pengunjung_least: (a: TListMateri, b: TListMateri) => filterByPengunjung(a, b, true)
    }
    setFilteredMateri(
      prev => {
        let materiToSet = (prev.length === 0 ? materi : prev);
        if (filterer.date_newest) {
          materiToSet = materiToSet.sort((a: TListMateri, b: TListMateri) => filterByDate(a, b, false))
        }
        if (filterer.date_oldest) {
          materiToSet = materiToSet.sort((a: TListMateri, b: TListMateri) => filterByDate(a, b, true))
        }
        if (filterer.rating_highest) {
          materiToSet = materiToSet.sort((a: TListMateri, b: TListMateri) => filterByRating(a, b, false))
        }
        if (filterer.rating_lowest) {
          materiToSet = materiToSet.sort((a: TListMateri, b: TListMateri) => filterByRating(a, b, true))
        }
        if (filterer.pengunjung_most) {
          materiToSet = materiToSet.sort((a: TListMateri, b: TListMateri) => filterByPengunjung(a, b, false))
        }
        if (filterer.pengunjung_least) {
          materiToSet = materiToSet.sort((a: TListMateri, b: TListMateri) => filterByPengunjung(a, b, true))
        }
        if (filterCondition && newestFilter && filterer[newestFilter]) {
          materiToSet = materiToSet.sort(listFilterer[newestFilter]);
        }
        return materiToSet
      }
    )
  };
  const filterAlatMusikAndKesulitan = (alatMusik: string, kesulitan: string[]) => {
    let newMateri: TListMateri[] = [];
    const filterByKesulitan = (materi: TListMateri) => kesulitan.includes(materi.data.tingkatan);
    const filterByAlatMusik = (materi: TListMateri) => materi.alatMusik === alatMusik;
    if (alatMusik !== 'semua' && kesulitan.length !== 0) {
      const materiByAlatMusik = materi.filter(filterByKesulitan);
      newMateri = materiByAlatMusik.filter(filterByAlatMusik);
    } if (alatMusik !== 'semua' && kesulitan.length === 0) {
      newMateri = materi.filter(filterByAlatMusik)
    } if (alatMusik === 'semua' && kesulitan.length !== 0) {
      newMateri = materi.filter(filterByKesulitan);
    } else if (alatMusik === 'semua' && kesulitan.length === 0) {
      newMateri = [];
    }
    setFilteredMateri(newMateri);
    handleFilteringMateri(filterBy, null, false);
  };
  const handleFilterAlatMusik = (alatMusik: string) => {
    setFilterBy(prev => {
      return {
        ...prev,
        alatMusik: alatMusik
      }
    });
    filterAlatMusikAndKesulitan(alatMusik, filterBy.kesulitan);
  };
  const handleFilterKesulitan = (kesulitan: string) => {
    kesulitan = kesulitan.toLowerCase();
    setFilterBy(prev => {
      let newKesulitan: string[] = [];
      if (prev.kesulitan.includes(kesulitan)) {
        newKesulitan = [...prev.kesulitan].filter(m => m !== kesulitan);
      } else {
        newKesulitan = [...prev.kesulitan, kesulitan];
      }
      filterAlatMusikAndKesulitan(filterBy.alatMusik, newKesulitan);

      return {
        ...prev,
        kesulitan: newKesulitan
      }
    });

  };


  // handle radio button filter
  const handleCheckBox = (key: string) => {
    if (key === "date_newest") {
      setFilterBy(prev => {
        const newFilterBy = {
          ...prev,
          date_newest: !prev.date_newest,
          date_oldest: false,
        }
        handleFilteringMateri(newFilterBy, 'date_newest', !prev.date_newest);
        return newFilterBy;
      });
    } else if (key === "date_oldest") {
      setFilterBy(prev => {
        const newFilterBy = {
          ...prev,
          date_newest: false,
          date_oldest: !prev.date_oldest,
        }
        handleFilteringMateri(newFilterBy, 'date_oldest', !prev.date_oldest);
        return newFilterBy;
      });
    } else if (key === "rating_highest") {
      setFilterBy(prev => {
        const newFilterBy = {
          ...prev,
          rating_highest: !prev.rating_highest,
          rating_lowest: false,
        }
        handleFilteringMateri(newFilterBy, 'rating_highest', !prev.rating_highest);
        return newFilterBy;
      });
    } else if (key === "rating_lowest") {
      setFilterBy(prev => {
        const newFilterBy = {
          ...prev,
          rating_highest: false,
          rating_lowest: !prev.rating_lowest,
        }
        handleFilteringMateri(newFilterBy, 'rating_lowest', !prev.rating_lowest);
        return newFilterBy;
      });
    } else if (key === "pengunjung_most") {
      setFilterBy(prev => {
        const newFilterBy = {
          ...prev,
          pengunjung_most: !prev.pengunjung_most,
          pengunjung_least: false,
        }
        handleFilteringMateri(newFilterBy, 'pengunjung_most', !prev.pengunjung_most);
        return newFilterBy;
      });
    } else if (key === "pengunjung_least") {
      setFilterBy(prev => {
        const newFilterBy = {
          ...prev,
          pengunjung_most: false,
          pengunjung_least: !prev.pengunjung_least,
        }
        handleFilteringMateri(newFilterBy, 'pengunjung_least', !prev.pengunjung_least,);
        return newFilterBy;
      });
    }

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
      <Select label="Alat Musik" menuProps={{ className: 'p-0 py-1' }}>
        {listAlatMusik.map((alatMusik, index) => (
          <Option key={index} value={alatMusik.id}
            onClick={() => handleFilterAlatMusik(alatMusik.id)}>
            {alatMusik.id.charAt(0).toUpperCase() + alatMusik.id.slice(1) + (alatMusik.totalMateri !== -1 ? ` (${alatMusik.totalMateri})` : '')}
          </Option>
        ))}
      </Select>
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
            <div key={index} onClick={() => handleCheckBox(item.key)}>
              <input
                className="focus:ring-0 me-2 rounded"
                type="checkbox" checked={!!filterBy[item.key as keyof TFilterBy]}
                readOnly={true} />
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
        <div key={index}
          className={`w-fit px-3 py-1 rounded-md cursor-pointer opacity-90 mt-1 border shadow-sm truncate ${item[1]} ${filterBy.kesulitan.includes(item[0].toLowerCase()) ? 'border-black text-black' : 'text-white'}`}
          onClick={() => handleFilterKesulitan(item[0])}>
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
      <div className="border border-gray-400 w-full rounded-md px-3 ps-5 py-2 pb-4 shadow-md mt-1">

        <div className="mt-2">
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
      <span className="relative md:text-gray-800 text-white group-hover:text-white transition-colors duration-300">
        Buat Materi
      </span>
    </div>
  )
  const button_informasi_buat_materi = (
    <InformationCircleIcon
      className="h-6 w-6 cursor-help fill-gray-600"
      onClick={() => setInfoCreateMateriModal(true)} />
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
    <div className="w-full max-w-7xl transform ms-auto me-auto md:mt-20 mt-10">
      <div>
        <div className="text-center text-2xl font-semibold text-gray-700">
          Materi
        </div>
        <div className="md:flex mt-5 lg:justify-end justify-center xl:pe-20 lg:pe-16">

          {modal_filter}
          <CreateMateriModal isOpen={createMateriModal} setModal={setCreateMateriModal} />
          <InfoCreateMateriModal isOpen={infoCreateMateriModal} setModal={setInfoCreateMateriModal} />

          {/* phone view */}
          <TransitionIn>
            <div className="p-4 md:hidden flex gap-5 px-5 justify-end">
              <div className={`w-4/5 ${isLogin ? 'flex' : 'hidden'}`}>
                <div className="w-full">
                  {button_buat_materi}
                </div>
                <div className="mb-auto">
                  {button_informasi_buat_materi}
                </div>
              </div>
              <div className="w-1/5">
                <div
                  className="flex sm:ps-5 gap-2 h-full py-2 rounded-md bg-gray-300 cursor-pointer"
                  onClick={() => setFilterModal(true)}>
                  <FunnelIcon className="w-5 h-5 my-auto sm:mx-0 mx-auto fill-gray-700" />
                  <div className="mt-auto mb-auto sm:block hidden text-gray-700">
                    Filter
                  </div>
                </div>
              </div>
            </div>
          </TransitionIn>

          <div className="md:w-4/6 px-4">
            <div>
              <TransitionIn>
                <Input className='shadow-md' type='text' label='Cari Materi' icon={<MagnifyingGlassIcon />}
                  value={cariMateri} onChange={handleSetCariMateri} />
              </TransitionIn>
            </div>
            <div className="mt-5">
              {(filteredMateri.length === 0 ? materi : filteredMateri).map((materi, index) => (
                <TransitionIn key={index} from='bottom' delay={index * 200}>
                  <MateriPreview
                    className='mb-5'
                    materi={materi}
                  />
                </TransitionIn>

              ))}

            </div>
          </div>

          {/* desktop view */}
          <div className="px-4 md:block hidden">
            <TransitionIn from='right'>
              <div className={`${isLogin ? 'flex' : 'hidden'}`}>
                <div className="w-full">
                  {button_buat_materi}
                </div>
                <div className="mb-auto">
                  {button_informasi_buat_materi}
                </div>
              </div>
              <div className="mt-2">
                {filter_menu}
              </div>
            </TransitionIn>

          </div>

        </div>
      </div>
    </div >
  )
}

export default ListMateri