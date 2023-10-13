import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { Dispatch, Fragment, useEffect, useState } from "react";
import Input from "../_shared/Input";
import { IErrSuccessMsg, TListPost } from "../../types/Types";
import { createPost, editPost } from "../../api/services";
import { Textarea } from "@material-tailwind/react";
import LoaderAnimation from "../../assets/LoaderAnimation";
import ErrSuccessMsg from "../_shared/ErrSuccessMsg";

interface IProps {
  isOpen: boolean,
  setModal: Dispatch<boolean>,
  prevPost?: TListPost
};
type TPost = {
  title: string,
  description: string
};
const CreatePostModal = (props: IProps) => {
  const { isOpen, setModal } = props;
  const { prevPost = {} as TListPost } = props
  
  const [isLoading, setIsLoading] = useState(false);
  const [errSuccessMsg, setErrSuccessMsg] = useState<IErrSuccessMsg>({
    type: "", message: ""
  });
  const [post, setPost] = useState<TPost>({
    title: '', description: ''
  });

  // fitur untuk set materi bila user memanggil untuk melakukan update materi
  useEffect(() => {
    if (Object.keys(prevPost).length !== 0) {
      setPost({
        title: prevPost.title,
        description: prevPost.description
      });
    };
  }, [prevPost]);

  // handler untuk menampilkan pesan error/success
  const handleSetErrmsg = (msg: string) => {
    setErrSuccessMsg({ type: 'error', message: msg });
  };

  // handler untuk set post
  const handleSetMateri = (key: string, value: string) => {
    setPost(prev => ({ ...prev, [key]: value }))
  };

  // handler untuk validasi dan uploadPost
  const validasiPost = () => {
    return post.title === '' || post.description === '' ? false : true;
  };
  const handlePosting = async () => {
    setIsLoading(true);
    const res = await createPost(post.title, post.description);
    setIsLoading(false);
    if (res.status) {
      setModal(false);
      window.location.reload();
    } else {
      handleSetErrmsg("Something went wrong, please login / try again later");
    };
  };
  const handleUpdatePost = async () => {
    setIsLoading(true);
    const res = await editPost(prevPost?.postID.toString(), post.title, post.description);
    setIsLoading(false);
    if (res.status) {
      window.location.reload();
    } else {
      handleSetErrmsg("Something went wrong, please login / try again later");
    };
  };


  // Components
  const main_section = (
    <div>
      <div className="lg:flex gap-10">
        <div className="w-full max-w-sm">
          <Input variant='standard' label='Judul post'
            value={post.title} onChange={(e: any) => handleSetMateri('title', e.target.value)} />
        </div>
      </div>
      <div className="mt-5">
        <Textarea label="Isi" value={post.description} spellCheck={false}
          className="focus:ring-0" resize={true}
          onChange={(e: any) => handleSetMateri('description', e.target.value)} />
      </div>
    </div >
  );
  const button_section = (
    <div>
      <div className="flex gap-3">
        <button
          className={`rounded-md w-32 h-9 text-white px-3 cursor-pointer md:text-base text-sm ${validasiPost() ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-400'}`}
          onClick={Object.keys(prevPost).length === 0 ? handlePosting : handleUpdatePost} disabled={!validasiPost()}>
          {isLoading ? <LoaderAnimation className='w-1 h-1' color='bg-white' /> : 'Posting'}
        </button>
        <div className="my-auto">
          <ErrSuccessMsg errSuccessMsg={errSuccessMsg} setErrSuccessMsg={setErrSuccessMsg} />
        </div>
      </div>
    </div>
  );

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
                      Buat Post
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

export default CreatePostModal