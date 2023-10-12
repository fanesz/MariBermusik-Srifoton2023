import { Fragment, useEffect, useState } from "react"
import { getMateriByAlatMusik, userIsLogin } from "../../api/services";
import MateriPreview from "../../components/Materi/MateriPreview";
import { TListMateri } from "../../types/Types";
import { FunnelIcon, InformationCircleIcon, MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Dialog, Transition } from "@headlessui/react";
import CreateMateriModal from "../../components/Materi/CreateMateriModal";
import Input from "../../components/_shared/Input";
import TransitionIn from "../../components/_shared/TransitionIn";
import InfoCreateMateriModal from "../../components/Materi/InfoCreateMateriModal";
import MenuFilter from "../../components/Materi/ListMateri/MenuFilter";

type TCurrentValue = {
  id: string,
  value: TListMateri[]
}


const ListMateri = () => {
  const [materi, setMateri] = useState<TListMateri[]>([]);
  const [filteredMateri, setFilteredMateri] = useState<TListMateri[]>([]);
  const [filterModal, setFilterModal] = useState(false);
  const [createMateriModal, setCreateMateriModal] = useState(false);
  const [infoCreateMateriModal, setInfoCreateMateriModal] = useState(false);
  const [cariMateri, setCariMateri] = useState('');
  const [isLogin, setIsLogin] = useState(false);


  // pengecekan apakah user sudah login
  const fetchIsLogin = async () => {
    const res = await userIsLogin();
    if (res.status) setIsLogin(true);
  }

  // mendapatkan semua data materi
  const fetchMateri = async () => {
    const res = await getMateriByAlatMusik();
    if (res.status) {
      const result = res.data.reduce((ac: TListMateri[], cv: TCurrentValue) => {
        return ac.concat(cv.value);
      }, []);
      setMateri(result);
      setFilteredMateri(result);
    }
  }
  useEffect(() => {
    fetchMateri();
    fetchIsLogin();
  }, []);









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
                    <MenuFilter materi={materi} setFilteredMateri={setFilteredMateri} />
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
              {filteredMateri?.map((materi, index) => (
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
                <MenuFilter materi={materi} setFilteredMateri={setFilteredMateri} />
              </div>
            </TransitionIn>

          </div>

        </div>
      </div>
    </div >
  )
}

export default ListMateri