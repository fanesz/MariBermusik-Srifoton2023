import { Dialog, Transition } from "@headlessui/react"
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Fragment } from "react"
import MenuFilter from "./MenuFilter";
import { TFilterBy, TListMateri } from "../../../types/Types";

interface TProps {
  filterModal: boolean,
  setFilterModal: React.Dispatch<React.SetStateAction<boolean>>,
  materi: TListMateri[],
  filterBy: TFilterBy,
  setFilterBy: React.Dispatch<React.SetStateAction<TFilterBy>>,
  setFilteredMateri: React.Dispatch<React.SetStateAction<TListMateri[]>>
}
const FilterMenuModal = (props: TProps) => {
  const { filterModal, setFilterModal, materi, setFilteredMateri, filterBy, setFilterBy } = props;

  return (
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
                    <MenuFilter materi={materi} filterBy={filterBy} setFilterBy={setFilterBy} setFilteredMateri={setFilteredMateri} />
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

export default FilterMenuModal