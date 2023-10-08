import { Dialog, Transition } from "@headlessui/react";
import { LinkIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Dispatch, Fragment, useEffect, useState } from "react";
import Input from "../_shared/Input";
import { IErrSuccessMsg, TListPost, TUser } from "../../types/Types";
import { addComment, createPost, editPost, getUserByParams } from "../../api/services";
import { Button, IconButton, Textarea } from "@material-tailwind/react";
import LoaderAnimation from "../../assets/LoaderAnimation";
import ErrSuccessMsg from "../_shared/ErrSuccessMsg";
import PostPreview from "./PostPreview";
import { convertCreatedAt, isImgurLinkValid } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import profile from "../../assets/profile.png";

interface IProps {
  isOpen: boolean,
  setModal: Dispatch<boolean>,
  prevPost: TListPost
}
type TPost = {
  title: string,
  description: string
}
const PostModal = (props: IProps) => {
  const { isOpen, setModal } = props;
  const { prevPost = {} as TListPost } = props;

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errSuccessMsg, setErrSuccessMsg] = useState<IErrSuccessMsg>({
    type: "",
    message: ""
  });
  const [post, setPost] = useState<TListPost>(prevPost);
  const [comment, setComment] = useState("");
  const [commenter, setCommenter] = useState<[string, string, string, Date][]>([]);


  // handler untuk menampilkan pesan error/success
  const handleSetErrmsg = (msg: string) => {
    setErrSuccessMsg({ type: 'error', message: msg });
  }

  const handleSetComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  }

  const fetchCommenter = async () => {
    let tempCommenter: [string, string, string, Date][] = [];
    if (Object.keys(post).length !== 0) {
      await Promise.all(post.comments.map(async (post) => {
        const res = await getUserByParams(null, null, post.owner);
        if (res.status) {
          tempCommenter.push([res.data.username, res.data.img, post.content, post.createdAt]);
        }
      }));
      if (tempCommenter.length !== 0) {
        tempCommenter.sort((a: any, b: any) => {
          return new Date(b[3]).getTime() - new Date(a[3]).getTime();
        })
        setCommenter(tempCommenter)
      }
    }
  }

  useEffect(() => {
    fetchCommenter();
  }, [post]);

  const handlePostComment = async () => {
    setIsLoading(true);
    const res = await addComment(post.owner, post.postID.toString(), comment);
    setIsLoading(false);
    if (res.status) {
      setComment("");
      setPost(prev => ({
        ...prev,
        comments: [...prev.comments, res.data]
      }))
    }
  }

  // Components
  const main_section = Object.keys(post).length !== 0 && (
    <div>
      <PostPreview post={post} clickablePost={false} />
    </div>
  )
  const comment_input_section = (
    <div className="relative border-b border-gray-300 pb-1">
      <Textarea
        variant="static" placeholder="Your Comment" rows={5} spellCheck={false}
        className="px-4 rounded-md focus:ring-0"
        value={comment} onChange={handleSetComment} />
      <div className="flex w-full justify-between py-1.5">
        <IconButton variant="text" color="blue-gray" size="sm" disabled>
          <div className={`${comment.length > 400 && 'text-red-300'} ms-3`}>
            {comment.length}/400
          </div>
        </IconButton>
        <div className="flex gap-2">
          <Button
            size="sm" color="red" variant="text" className="rounded-md"
            onClick={() => setModal(false)}>
            Cancel
          </Button>
          <Button
            size="sm" className="rounded-md"
            disabled={comment.length === 0 || comment.length > 400}
            onClick={handlePostComment}>
            Post Comment
          </Button>
        </div>
      </div>
    </div>
  )

  const comment_list_section = (
    <div>
      {commenter?.map((item, index) => (
        <div className="flex w-full mb-1 rounded-md shadow-sm" key={index}>
          <div className="w-full ps-3 pt-1">
            <div className="flex gap-2">
              <div>
                <img
                  src={isImgurLinkValid(item[1]) ? item[1] : profile}
                  className="w-7 h-7 rounded-full cursor-pointer"
                  onClick={() => navigate(`/profile/${item[0]}`)} />
              </div>
              <div className="flex gap-2 ">
                <div
                  className="my-auto text-gray-700 hover:text-gray-800 cursor-pointer"
                  onClick={() => navigate(`/profile/${item[0]}`)}>
                  {item[0]}
                </div>
                <div className="font-extrabold my-auto">·</div>
                <div className="text-xs my-auto text-gray-600">
                  {convertCreatedAt(item[3])}
                </div>
              </div>
            </div>
            <div className=" mb-2 break-words ps-9 md:text-base text-sm text-gray-800">
              {item[2]}
            </div>
          </div>
        </div>
      ))}
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
              <Dialog.Panel className="w-full max-w-4xl h-fit transform overflow-hidden rounded-2xl bg-gray-200 px-5 py-4 text-left align-middle shadow-xl transition-all">

                <Dialog.Title className="text-lg text-center font-semibold text-gray-600">
                  <div className="flex justify-end">
                    <div className='mt-auto mb-auto'>
                      <XMarkIcon className="h-5 cursor-pointer hover:bg-gray-300 rounded" onClick={() => setModal(false)} />
                    </div>
                  </div>
                </Dialog.Title>

                <div className="rounded-md bg-white bg-opacity-70 px-5 py-3 mt-2">
                  <div className="">
                    {main_section}
                  </div>
                  <div className="mt-3">
                    {comment_input_section}
                  </div>
                  <div className="mt-3">
                    {comment_list_section}
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

export default PostModal