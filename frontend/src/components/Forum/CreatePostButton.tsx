import { useState } from "react";
import CreatePostModal from "./CreatePostModal"

interface IProps {
  currentUser: string,
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>
};
const CreatePostButton = (props: IProps) => {
  const { currentUser, setLoginModal } = props;

  const [createPostModal, setCreatePostModal] = useState(false);
  const handleSetCreatePostModal = () => {
    if (currentUser) {
      setCreatePostModal(true);
    } else {
      setLoginModal(true);
    };
  };

  return (
    <div className="h-full">
      <CreatePostModal isOpen={createPostModal} setModal={setCreatePostModal} />
      <div
        className="group relative h-full overflow-hidden rounded-lg bg-white text-lg shadow-md text-center cursor-pointer flex"
        onClick={handleSetCreatePostModal}>
        <div className="absolute inset-0 md:w-3 bg-green-400 transition-all duration-500 ease-out group-hover:w-full"></div>
        <span className="relative md:text-gray-800 text-white group-hover:text-white transition-colors duration-300 m-auto md:text-lg sm:text-base text-xs">
          Buat Post
        </span>
      </div>
    </div>
  )
}

export default CreatePostButton