import { useState } from "react";
import CreateMateriModal from "../_shared/CreateMateriModal";

interface IProps {
  isLogin: boolean,
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>
};
const CreateMateriButton = (props: IProps) => {
  const { isLogin, setLoginModal } = props;
  
  const [createMateriModal, setCreateMateriModal] = useState(false);
    const handleSetLoginModal = () => {
      if (isLogin) {
        setCreateMateriModal(true);
      } else {
        setLoginModal(true);
      };
    };
  
  return (
    <div>
      <CreateMateriModal isOpen={createMateriModal} setModal={setCreateMateriModal} />
      <div
        className="group relative py-2 overflow-hidden rounded-lg bg-white text-lg shadow-md text-center cursor-pointer"
        onClick={handleSetLoginModal}>
        <div className="absolute inset-0 md:w-3 bg-green-400 transition-all duration-500 ease-out group-hover:w-full"></div>
        <span className="relative md:text-gray-800 text-white group-hover:text-white transition-colors duration-300">
          Buat Materi
        </span>
      </div>
    </div>
  )
}

export default CreateMateriButton