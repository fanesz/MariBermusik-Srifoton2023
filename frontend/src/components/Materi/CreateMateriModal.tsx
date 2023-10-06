import { Dialog, Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon, DocumentMinusIcon, DocumentTextIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Dispatch, Fragment, useEffect, useState } from "react";
import Input from "../_shared/Input";
import { TDaftarMateri } from "../../types/Types";
import { getAlatMusikList } from "../../api/services";
import { Option, Select, Textarea } from "@material-tailwind/react";

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
          <Select label="Tingkatan">
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

  const handleAddSubMateri = () => {
    setDaftarMateri(prev => {
      const newSubMateriID = prev[prev.length-1].id+1;
      const newSubMateri = DEFAULT_VALUE;
      newSubMateri.id = newSubMateriID;
      console.log(newSubMateri);
      
      console.log(newSubMateri);
      
      return [...prev, newSubMateri]
    })
  }

  const button_section = (
    <div>
      <div
        className="rounded-md bg-blue-500 w-fit p-2 cursor-pointer"
        onClick={handleAddSubMateri}>
        <PlusIcon className="w-4 h-4 fill-white" />
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