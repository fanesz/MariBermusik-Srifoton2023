import { ChevronDownIcon, ChevronUpIcon, EllipsisHorizontalIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { ChatBubbleLeftEllipsisIcon } from "@heroicons/react/24/outline";
import { TListPost, TUser } from "../../types/Types";
import { convertCreatedAt } from "../../utils/utils";
import { useNavigate } from "react-router-dom";
import { getUserByParams, updateVote } from "../../api/services";
import { useEffect, useState } from "react";
import PostModal from "./PostModal";
import CreatePostModal from "./CreatePostModal";
import { Popover, PopoverContent, PopoverHandler } from "@material-tailwind/react";
import profile from "../../assets/profile.webp";
import DeletePostAlert from "./DeletePostAlert";

interface IProps {
  className?: string,
  prevPost: TListPost,
  isFromModal: boolean,
  currentUser: string | null,
  setParentPost: React.Dispatch<React.SetStateAction<TListPost[]>>,
  setLoginModal?: React.Dispatch<React.SetStateAction<boolean>>
};
const PostPreview = (props: IProps) => {
  const { className, prevPost, isFromModal, currentUser, setParentPost, setLoginModal } = props;

  const navigate = useNavigate();
  const [owner, setOwner] = useState<TUser>({} as TUser);
  const [isOwner, setIsOwner] = useState<null | boolean>(null);
  const [postModal, setPostModal] = useState(false);
  const [editPostModal, setEditPostModal] = useState(false);
  const [deleteAlertModal, setDeleteAlertModal] = useState(false);

  // fetch data owner pemilik post
  const fetchOwner = async () => {
    const resOwner = await getUserByParams(null, null, prevPost.owner);
    if (resOwner.status) {
      setOwner(resOwner.data);
      currentUser && setIsOwner(currentUser === prevPost.owner ? true : false);
    };
  };
  useEffect(() => {
    fetchOwner();
  }, [currentUser]);

  // handler edit dan delete post
  const handleEditPost = () => {
    setEditPostModal(true);
  };
  const handleDeletePost = async () => {
    setDeleteAlertModal(true);
  };

  //ownerUUID: string, postID: string, voterUUID: string, voteType: string
  const handleUpVote = async (type: 'upvotes' | 'downvotes') => {
    if (!currentUser || currentUser === '-1') return setLoginModal && setLoginModal(true);
    if (isOwner || isOwner === null) return;
    if (currentUser) {
      const res = await updateVote(prevPost.owner, prevPost.postID.toString(), currentUser, type);
      if (res.status && setParentPost) {
        setParentPost(prev => {
          const updatedList = prev.map(item => {
            if (item.owner === prevPost.owner && item.postID === prevPost.postID) {
              return res.data;
            }
            return item;
          });
          return updatedList;
        });
      };
    };
  };

  // cek apakah user sudah vote atau belum
  const isUserVote = (type: 'upvotes' | 'downvotes') => {
    if (currentUser) {
      if (type === 'upvotes') return prevPost?.upvotes.includes(currentUser);
      else return prevPost?.downvotes.includes(currentUser);
    };
  };

  // Components
  const updownvote = (
    <div className="text-center mt-2">
      <ChevronUpIcon
        className={`w-6 h-6 hover:scale-110 cursor-pointer ${isUserVote('upvotes') ? 'text-green-500' : 'text-gray-500'}`}
        onClick={() => handleUpVote('upvotes')} />
      {prevPost?.upvotes.length - prevPost?.downvotes.length}
      <ChevronDownIcon
        className={`w-6 h-6 hover:scale-110 cursor-pointer ${isUserVote('downvotes') ? 'text-red-500' : 'text-gray-500'}`}
        onClick={() => handleUpVote('downvotes')} />
    </div>
  );
  const top_section = (
    <div className="flex gap-1 text-xs text-gray-600">
      <div className="sm:flex gap-1">
        <div className="sm:block hidden">
          posted by
        </div>
        <div
          className="cursor-pointer hover:text-gray-800 flex gap-1"
          onClick={() => navigate(`/profile/${owner?.username}`)}>
          <img
            src={owner?.img ? owner?.img : profile}
            className={`w-4 h-4 rounded-full ${!isFromModal && 'hidden'}`} />
          <div className="my-auto">
            {owner?.username}
          </div>
        </div>
      </div>
      <div className="font-extrabold">·</div>
      <div>
        {convertCreatedAt(prevPost?.createdAt)}
      </div>
    </div>
  );
  const title_desc = (
    <div
      className={`h-full ${!isFromModal && 'cursor-pointer'}`}
      onClick={() => !isFromModal && setPostModal(true)}>
      <div className="text-xl font-medium h-2/6 truncate">
        {prevPost?.title}
      </div>
      <div className={`text-gray-800 h-4/6 md:text-sm text-xs mt-1 ${!isFromModal && 'overflow-scroll'}`}>
        {prevPost?.description}
      </div>
    </div>
  );
  const footer = (
    <div className="flex md:gap-4 gap-2">
      <div
        className={`opacity-70 md:flex hidden gap-1.5 ${!isFromModal && 'cursor-pointer group'}`}
        onClick={() => !isFromModal && setPostModal(true)}>
        <ChatBubbleLeftEllipsisIcon className="w-5 h-5 pt-0.5 opacity-80 group-hover:opacity-100" />
        <div className="text-xs my-auto text-gray-700 group-hover:text-gray-900">
          {prevPost?.comments.length} Comments
        </div>
      </div>
      <div className={`${(!isOwner || isFromModal) && 'hidden'} cursor-pointer hover:bg-gray-200 rounded duration-75`}>
        <Popover placement="top-start">
          <PopoverHandler>
            <EllipsisHorizontalIcon className="w-5 h-5" onClick={() => alert(1)} />
          </PopoverHandler>
          <PopoverContent className="p-0">
            <div
              className="p-1.5 pt-2 pe-3 flex gap-2 hover:bg-gray-200 cursor-pointer"
              onClick={handleEditPost}>
              <PencilIcon className="w-4 h-4" />
              Edit
            </div>
            <div
              className="p-1.5 pt-2 pe-3 flex gap-2 hover:bg-gray-200 cursor-pointer"
              onClick={handleDeletePost}>
              <TrashIcon className="w-4 h-4" />
              Delete
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className={`${(!isOwner || !isFromModal) && 'hidden'} flex md:gap-3 gap-2`}>
        <div className="font-extrabold md:block hidden">·</div>
        <div
          className="my-auto text-xs flex gap-1 cursor-pointer text-gray-700 hover:text-gray-900"
          onClick={handleEditPost}>
          <PencilIcon className="w-3 h-3 my-auto" />
          <span className="">Edit</span>
        </div>
        <div className="font-extrabold">·</div>
        <div
          className="my-auto text-xs flex gap-1 cursor-pointer text-gray-700 hover:text-gray-900"
          onClick={handleDeletePost}>
          <TrashIcon className="w-3 h-3 my-auto" />
          <span className="">Delete</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className={`w-full ${!isFromModal && 'h-40'} border border-opacity-30 border-gray-700 shadow-md rounded-md flex ${className} px-2 hover:shadow-lg hover:transition-all duration-300`}>

      <PostModal isOpen={postModal} setModal={setPostModal} prevPost={prevPost} currentUser={currentUser} setParentPost={setParentPost} />
      <CreatePostModal isOpen={editPostModal} setModal={setEditPostModal} prevPost={prevPost} />
      <DeletePostAlert isOpen={deleteAlertModal} setModal={setDeleteAlertModal} title={prevPost.title} postID={prevPost.postID.toString()} />

      <div className="w-fit">
        {updownvote}
      </div>

      <div className="md:px-6 px-3 w-full">
        <div className={`${!isFromModal && 'h-1/5'} pt-2`}>
          {top_section}
        </div>

        <div className={`${!isFromModal ? 'h-3/5 pt-0' : 'pt-2'} -mt-1`}>
          {title_desc}
        </div>

        <div className={`${!isFromModal && 'h-1/5'} pb-2 pt-1`}>
          {footer}
        </div>

      </div>
    </div>
  )
}

export default PostPreview