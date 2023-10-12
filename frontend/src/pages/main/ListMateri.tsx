import { useEffect, useState } from "react"
import { getMateriByAlatMusik, userIsLogin } from "../../api/services";
import { TFilterBy, TListMateri } from "../../types/Types";
import { FunnelIcon, InformationCircleIcon } from "@heroicons/react/24/solid";
import TransitionIn from "../../components/_shared/TransitionIn";
import InfoCreateMateriModal from "../../components/Materi/ListMateri/InfoCreateMateriModal";
import MenuFilter from "../../components/Materi/ListMateri/MenuFilter";
import CreateMateriButton from "../../components/Materi/ListMateri/CreateMateriButton";
import FilterMenuModal from "../../components/Materi/ListMateri/FilterMenuModal";
import MateriSection from "../../components/Materi/ListMateri/MateriSection";

type TCurrentValue = {
  id: string,
  value: TListMateri[]
}
const ListMateri = () => {
  const [materi, setMateri] = useState<TListMateri[]>([]);
  const [filteredMateri, setFilteredMateri] = useState<TListMateri[]>([]);
  const [filterModal, setFilterModal] = useState(false);
  const [infoCreateMateriModal, setInfoCreateMateriModal] = useState(false);
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

  // Components
  const button_informasi_buat_materi = (
    <InformationCircleIcon
      className="h-6 w-6 cursor-help fill-gray-600"
      onClick={() => setInfoCreateMateriModal(true)} />
  )
  const page_phone_view = (
    <TransitionIn>
      <div className="p-4 md:hidden flex gap-5 px-5 justify-end">
        <div className={`w-4/5 ${isLogin ? 'flex' : 'hidden'}`}>
          <div className="w-full">
            <CreateMateriButton />
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
  )
  const page_desktop_view = (
    <div className="px-4 md:block hidden">
      <TransitionIn from='right'>
        <div className={`${isLogin ? 'flex' : 'hidden'}`}>
          <div className="w-full">
            <CreateMateriButton />
          </div>
          <div className="mb-auto">
            {button_informasi_buat_materi}
          </div>
        </div>
        <div className="mt-2">
          <MenuFilter materi={materi} filterBy={filterBy} setFilterBy={setFilterBy} setFilteredMateri={setFilteredMateri} />
        </div>
      </TransitionIn>
    </div>
  )

  return (
    <div className="w-full max-w-7xl transform ms-auto me-auto md:mt-20 mt-10">
      <div>
        <div className="text-center text-2xl font-semibold text-gray-700">
          Materi
        </div>
        <div className="md:flex mt-5 lg:justify-end justify-center xl:pe-20 lg:pe-16">

          <FilterMenuModal materi={materi} filterBy={filterBy} setFilterBy={setFilterBy} setFilteredMateri={setFilteredMateri} filterModal={filterModal} setFilterModal={setFilterModal} />
          <InfoCreateMateriModal isOpen={infoCreateMateriModal} setModal={setInfoCreateMateriModal} />

          {page_phone_view}

          <MateriSection filteredMateri={filteredMateri} setFilteredMateri={setFilteredMateri} />

          {page_desktop_view}

        </div>
      </div>
    </div >
  )
}

export default ListMateri