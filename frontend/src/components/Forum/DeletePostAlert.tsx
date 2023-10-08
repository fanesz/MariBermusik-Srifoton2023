import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Dispatch, Fragment } from "react";
import { deletePost } from "../../api/services";

interface IProps {
  isOpen: boolean,
  setModal: Dispatch<boolean>,
  title: string,
  postID?: string
}
const DeletePostAlert = (props: IProps) => {
  const { isOpen, setModal, title, postID } = props;
  const handleDeletePost = async () => {
    const res = await deletePost(postID || '');
    if (res.status) {
      window.location.reload();
    }
  }

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
              <Dialog.Panel className="w-full max-w-xl h-fit transform overflow-hidden rounded-2xl bg-gray-200 px-5 py-4 text-left align-middle shadow-xl transition-all">

                <Dialog.Title className="text-lg text-center font-semibold text-gray-600">
                  <div className="flex justify-between">
                    <div className='w-full'>
                      Hapus Post
                    </div>
                    <div className='mt-auto mb-auto'>
                      <XMarkIcon className="h-5 cursor-pointer hover:bg-gray-300 rounded" onClick={() => setModal(false)} />
                    </div>
                  </div>
                </Dialog.Title>

                <div className="rounded-md mt-2 bg-white bg-opacity-70 p-5 ">
                  <div>
                    Apakah kamu yakin ingin menghapus materi dengan judul "{title}"?<br />
                    Post yang dihapus tidak dapat dikembalikan.
                  </div>
                  <div className="flex gap-3 mt-3">
                    <button
                      className="px-3 py-1 rounded-md text-white bg-red-400 hover:bg-red-600"
                      onClick={() => handleDeletePost()}>
                      Hapus
                    </button>
                    <button
                      className="px-3 py-1 rounded-md text-white bg-gray-400 hover:bg-gray-500"
                      onClick={() => setModal(false)}>
                      Cancel
                    </button>
                  </div>
                </div>

              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default DeletePostAlert