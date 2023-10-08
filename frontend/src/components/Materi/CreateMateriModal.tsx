import { Dialog, Transition } from "@headlessui/react";
import { MinusIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Dispatch, Fragment, useEffect, useState } from "react";
import Input from "../_shared/Input";
import { IErrSuccessMsg, TDaftarMateri, TListMateri, TTingkatan } from "../../types/Types";
import { createMateri, editMateriByID } from "../../api/services";
import { Alert, Option, Select, Textarea } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import LoaderAnimation from "../../assets/LoaderAnimation";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "../../utils/LocalStorage";
import ErrSuccessMsg from "../_shared/ErrSuccessMsg";

interface IProps {
  isOpen: boolean,
  setModal: Dispatch<boolean>,
  prevMateri?: TListMateri
}
type TMateri = {
  nama: string,
  deskripsi: string,
  alatMusik: string,
  tingkatan: TTingkatan
}
const CreateMateriModal = (props: IProps) => {
  const { isOpen, setModal } = props;
  const { prevMateri = {} as TListMateri } = props

  const DEFAULT_VALUE = { id: 0, judul: '', materi: '', }

  const navigate = useNavigate();
  const [daftarMateri, setDaftarMateri] = useState<TDaftarMateri[]>([DEFAULT_VALUE]);
  const [isLoading, setIsLoading] = useState(false);
  const [errSuccessMsg, setErrSuccessMsg] = useState<IErrSuccessMsg>({
    type: "",
    message: ""
  });
  const [materi, setMateri] = useState<TMateri>({
    nama: '',
    deskripsi: '',
    alatMusik: '',
    tingkatan: 'Pemula',
  });


  // fitur untuk set materi bila user memanggil untuk melakukan update materi
  useEffect(() => {
    if (Object.keys(prevMateri).length !== 0) {
      setMateri({
        nama: prevMateri.data.nama,
        deskripsi: prevMateri.data.deskripsi,
        alatMusik: prevMateri.alatMusik,
        tingkatan: prevMateri.data.tingkatan,
      });
      setDaftarMateri(prevMateri.data.daftarMateri);
    }
  }, [prevMateri]);


  // fitur untuk draft materi bila user refresh page
  useEffect(() => {
    if (prevMateri) return;
    const materi = getLocalStorage('createMateri');
    const objectMateri = materi ? JSON.parse(materi) : null;
    if (objectMateri) {
      setMateri(objectMateri.materi);
      setDaftarMateri(objectMateri.daftarMateri);
    }
  }, []);
  useEffect(() => {
    if (prevMateri) return;
    if (materi.nama === '' &&
      materi.deskripsi === '' &&
      materi.alatMusik === '' &&
      daftarMateri.some(item => item.judul === '' && item.materi === '')) return;
    const stringMateri = JSON.stringify({ materi: materi, daftarMateri: daftarMateri })
    setLocalStorage('createMateri', stringMateri);
  }, [materi, daftarMateri]);


  // handler untuk menampilkan pesan error/success
  const handleSetErrmsg = (msg: string) => {
    setErrSuccessMsg({ type: 'error', message: msg });
  }


  // handler untuk set materi dan daftar materi
  const handleSetMateri = (key: string, value: string) => {
    setMateri(prev => ({ ...prev, [key]: value }))
  }
  const handleSetDaftarMateri = (key: string, value: string, id: number) => {
    setDaftarMateri(prev => {
      const newDaftarMateri: TDaftarMateri[] = [...prev];
      (newDaftarMateri[id] as TDaftarMateri | any)[key as keyof TDaftarMateri] = value;
      return newDaftarMateri;
    })
  };


  // handler untuk tambah, kurang sub materi
  const handleAddSubMateri = () => {
    setDaftarMateri(prev => {
      const newSubMateriID = prev.length > 0 ? prev[prev.length - 1].id + 1 : 1;
      const newSubMateri = { ...DEFAULT_VALUE, id: newSubMateriID };
      return [...prev, newSubMateri];
    });
  };
  const handleDeleteSubMateri = () => {
    setDaftarMateri(prev => {
      const newDaftarMateri = [...prev];
      newDaftarMateri.pop();
      return newDaftarMateri;
    });
  };


  // handler untuk validasi dan simpan materi
  const validasiSimpanMateri = () => {
    if (materi.nama === '' ||
      materi.deskripsi === '' ||
      materi.alatMusik === '' ||
      daftarMateri.some(item => item.judul === '' || item.materi === '')) {
      return false;
    }
    return true;
  };
  const handleSimpanMateri = async () => {
    setIsLoading(true);
    const res = await createMateri(materi.alatMusik.toLowerCase(), {
      nama: materi.nama,
      deskripsi: materi.deskripsi,
      tingkatan: materi.tingkatan.toLocaleLowerCase(),
      daftarMateri: daftarMateri
    });
    setIsLoading(false);
    if (res.status) {
      removeLocalStorage('createMateri');
      navigate(`/materi/${materi.alatMusik}/${res.materiID}`);
      setModal(false);
    } else {
      handleSetErrmsg("Something went wrong, please login / try again later");
    }
  }
  const handleUpdateMateri = async () => {
    setIsLoading(true);
    const res = await editMateriByID(prevMateri.alatMusik.toLowerCase(), prevMateri.materiID, {
      nama: materi.nama,
      deskripsi: materi.deskripsi,
      tingkatan: materi.tingkatan.toLocaleLowerCase(),
      daftarMateri: daftarMateri
    });
    setIsLoading(false);
    if (res.status) {
      // setModal(false);
      window.location.reload();
    } else {
      handleSetErrmsg("Something went wrong, please login / try again later");
    }
  }


  // Components
  const main_section = (
    <div>
      <div className="lg:flex gap-10">
        <div className="w-full max-w-sm">
          <Input variant='standard' label='Judul materi'
            value={materi.nama} onChange={(e: any) => handleSetMateri('nama', e.target.value)} />
        </div>
        <div className="lg:mt-0 mt-3">
          <Input variant='standard' label='Alat musik'
            value={materi.alatMusik} onChange={(e: any) => handleSetMateri('alatMusik', e.target.value)} />
        </div>
        <div className="lg:mt-0 mt-3">
          <Select label='Tingkatan'>
            {['Pemula', 'Menengah', 'Sulit'].map((tingkatan, index) => (
              <Option key={index} value={tingkatan}
                onClick={() => handleSetMateri('tingkatan', tingkatan)}>
                {tingkatan}
              </Option>
            ))}
          </Select>
        </div>
      </div>
      <div className="mt-5">
        <Textarea label="Deskripsi" value={materi.deskripsi} spellCheck={false}
          className="focus:ring-0"
          onChange={(e: any) => handleSetMateri('deskripsi', e.target.value)} />
      </div>
    </div >
  )
  const daftarMateri_section = (
    <div>
      {daftarMateri.map((item, index) => (
        <div className="border-b border-gray-400 border-opacity-40 mt-2 pb-2" key={index}>
          <div className="w-full max-w-xs">
            <Input variant='standard' className="border-none" label={`Sub materi-${index + 1}`}
              value={item.judul} onChange={(e: any) => handleSetDaftarMateri('judul', e.target.value, index)} />
          </div>
          <div className="mt-1">
            <Textarea label="Materi" value={item.materi} spellCheck={false}
              className="focus:ring-0" resize={true}
              onChange={(e: any) => handleSetDaftarMateri('materi', e.target.value, index)} />
          </div>
        </div>
      ))}
    </div>
  )
  const button_section = (
    <div>
      <div className="flex gap-3">
        <button
          className="rounded-md w-fit p-2.5 bg-blue-500 hover:bg-blue-600 cursor-pointer"
          onClick={handleAddSubMateri}>
          <PlusIcon className="w-4 h-4 my-auto fill-white" />
        </button>
        <button
          className={`rounded-md w-fit p-2.5 cursor-pointer ${daftarMateri.length <= 1 ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-600'}`}
          onClick={handleDeleteSubMateri} disabled={daftarMateri.length <= 1}>
          <MinusIcon className="w-4 h-4 my-auto fill-white" />
        </button>
        <button
          className={`rounded-md w-32 text-white px-3 cursor-pointer md:text-base text-sm ${validasiSimpanMateri() ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-400'}`}
          onClick={Object.keys(prevMateri).length === 0 ? handleSimpanMateri : handleUpdateMateri} disabled={!validasiSimpanMateri()}>
          {isLoading ? <LoaderAnimation className='w-1 h-1' color='bg-white' /> : 'Simpan Materi'}
        </button>
        <div className="my-auto">
        <ErrSuccessMsg errSuccessMsg={errSuccessMsg} setErrSuccessMsg={setErrSuccessMsg} />
        </div>
      </div>
    </div>
  )

  return (
    <Transition
      appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={() => { setModal(false) }}>
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
              <Dialog.Panel className="w-full max-w-5xl h-fit transform overflow-hidden rounded-2xl bg-gray-200 px-5 py-4 text-left align-middle shadow-xl transition-all">

                <Dialog.Title className="text-lg text-center font-semibold text-gray-600">
                  <div className="flex justify-between">
                    <div className='w-full'>
                      Buat Materi
                    </div>
                    <div className='mt-auto mb-auto'>
                      <XMarkIcon className="h-5 cursor-pointer hover:bg-gray-300 rounded" onClick={() => setModal(false)} />
                    </div>
                  </div>
                </Dialog.Title>

                <div className="rounded-md mt-2 bg-white bg-opacity-70 p-5 ">
                  <div className="">
                    {main_section}
                  </div>
                  <div className="">
                    {daftarMateri_section}
                  </div>
                  <div className="mt-3">
                    {button_section}
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )

}

export default CreateMateriModal