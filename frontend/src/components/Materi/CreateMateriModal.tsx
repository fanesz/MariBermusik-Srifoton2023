import { Dialog, Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, DocumentMinusIcon, DocumentTextIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Dispatch, Fragment, useEffect, useState } from "react";
import Input from "../_shared/Input";
import { TDaftarMateri } from "../../types/Types";
import { getAlatMusikList } from "../../api/services";

interface IProps {
  isOpen: boolean,
  setModal: Dispatch<boolean>
}
type TListAlatMusik = {
  id: string,
  totalMateri: number
}
type TTingkatan = 'Tingkatan' | 'Pemula' | 'Menengah' | 'Sulit';
type TMateri = {
  nama: string,
  deskripsi: string,
  alatMusik: string,
  tingkatan: TTingkatan
}
const CreateMateriModal = (props: IProps) => {
  const { isOpen, setModal } = props;
  const DEFAULT_VALUE = {
    id: 0,
    judul: '',
    materi: '',
  }

  const [materi, setMateri] = useState<TMateri>({
    nama: '',
    deskripsi: '',
    alatMusik: '',
    tingkatan: 'Tingkatan',
  })

  const [daftarMateri, setDaftarMateri] = useState<TDaftarMateri[]>([DEFAULT_VALUE]);

  const [listAlatMusik, setListAlatMusik] = useState<TListAlatMusik[]>([]);
  const fetchListAlatMusik = async () => {
    const res = await getAlatMusikList();
    if (res.status) {
      setListAlatMusik([{ id: 'semua', totalMateri: -1 }, ...res.data]);
    }
  }
  useEffect(() => {
    fetchListAlatMusik();
  }, [])

  const handleSetMateri = (key: string, value: string) => {
    setMateri(prev => ({ ...prev, [key]: value }))
  }
  const handleSetDaftarMateri = (key: string, value: string, id: number) => {
    setDaftarMateri(prev => {
      const newDaftarMateri: TDaftarMateri[] = [...prev];
      (newDaftarMateri[id] as TDaftarMateri | any)[key as keyof TDaftarMateri] = value;
      return newDaftarMateri;
    })
  }


  const main_section = (
    <div>
      <div className="flex gap-10">
        <div className="w-full max-w-sm">
          <Input variant='standard' label='Judul materi'
            value={materi.nama} onChange={(e: any) => handleSetMateri('nama', e.target.value)} />
        </div>
        <div className="">
          <Input variant='standard' label='Alat musik'
            value={materi.alatMusik} onChange={(e: any) => handleSetMateri('alatMusik', e.target.value)} />
        </div>
        <div>
          <div className="z-20">
            <Listbox as='div' className='relative z-20' value={listAlatMusik} onChange={() => setListAlatMusik}>
              <Listbox.Button className="w-full py-1 text-start px-3 border border-gray-600 rounded-md cursor-pointer flex justify-between shadow-sm">
                <div>
                  {materi.tingkatan}
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
                <Listbox.Options className="border border-gray-400 rounded-b-md mt-2 cursor-pointer shadow-lg absolute bg-white w-fit z-20">
                  {['Pemula', 'Menengah', 'Sulit'].map((tingkatan, index) => (
                    <Listbox.Option key={index} value={tingkatan}
                      onClick={() => handleSetMateri('tingkatan', tingkatan)}
                      className={`px-3 py-1 z-20 text-gray-800 hover:bg-gray-100 ${index !== 2 && "border-b border-gray-400"} ${materi.alatMusik === tingkatan && "bg-gray-200"}`}>
                      {tingkatan}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </Listbox>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <Input variant='standard' className="h-10" label='Deskripsi'
          value={materi.deskripsi} onChange={(e: any) => handleSetMateri('deskripsi', e.target.value)} />
      </div>
    </div >
  )

  const daftarMateri_section = (
    <div>
      <div>
        {daftarMateri.map((item, index) => (
          <div className="border-b border-gray-400 mt-5 pb-2" key={index}>

            <div className="w-full max-w-xs">
              <Input variant='standard' className="border-none" label={`Sub materi-${index + 1}`}
                value={item.judul} onChange={(e: any) => handleSetDaftarMateri('judul', e.target.value, index)} />
            </div>
            <div className="">
              <textarea
                className="w-full rounded bg-none px-3 py-1"
                value={item.materi} onChange={(e: any) => handleSetDaftarMateri('materi', e.target.value, index)} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const button_section = (
    <div>
      <div>
        
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
                      Create Materi
                    </div>
                    <div className='mt-auto mb-auto'>
                      <XMarkIcon className="h-5 cursor-pointer hover:bg-gray-300 rounded" onClick={() => setModal(false)} />
                    </div>
                  </div>
                </Dialog.Title>

                <div className="rounded-md mt-2 bg-white bg-opacity-70 p-5 ">
                  <div className="mb-10">
                    {main_section}
                  </div>
                  <div>
                    {daftarMateri_section}
                  </div>
                  <div>
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