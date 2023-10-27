import { useParams } from "react-router-dom";
import { addPengunjung, getMateriByAlatMusik, getUserByParams, userIsLogin } from "../../api/services";
import { useEffect, useState } from "react";
import { TListMateri } from "../../types/Types";
import TitleSection from "../../components/Materi/DynamicMateri/TitleSection";
import EditDeleteSection from "../../components/Materi/DynamicMateri/EditDeleteSection";
import OwnerAndStatsSection from "../../components/Materi/DynamicMateri/OwnerAndStatsSection";
import MainSection from "../../components/Materi/DynamicMateri/MainSection";
import RatingSection from "../../components/Materi/DynamicMateri/RatingSection";

interface IProps {
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>
}
const Materi = (props: IProps) => {
  const { setLoginModal } = props;

  const { alatmusik, id } = useParams();
  const [materi, setMateri] = useState<TListMateri>({} as TListMateri);
  const [isOwner, setIsOwner] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  // fetch data materi dan owner
  const fetchMateriOwnerAndRating = async () => {

    // fetch materi berdasarkan param
    const resMateri = await getMateriByAlatMusik(alatmusik, id);
    if (resMateri.status) {
      setMateri(resMateri.data);

      // check apakah user sudah login
      const isLogin = await userIsLogin();
      if (isLogin.status) {

        // mendapatkan UUID user bila login
        const UUID = await getUserByParams(true);
        if (UUID.status) {
          const currentUserUUID = UUID.data.UUID;
          setCurrentUser(currentUserUUID);
          if (currentUserUUID === resMateri.data.owner) {
            setIsOwner(true);
          }
        }
      }
    }
  };
  useEffect(() => {
    fetchMateriOwnerAndRating();
    // add Pengunjung saat page di akses
    addPengunjung(alatmusik || '', id || '');
  }, []);

  return (
    <div className="w-full max-w-7xl transform ms-auto me-auto md:mt-20 mt-10 lg:px-12 px-5">
      <div>
        <TitleSection materi={materi} />
      </div>

      <div>
        <div className={`pb-3 flex ${isOwner ? 'justify-between' : 'justify-end'}`}>
          <div className={`mt-auto ${isOwner ? 'block' : 'hidden'}`}>
            <EditDeleteSection materi={materi} alatmusik={alatmusik || ''} id={id || ''} />
          </div>
          <div>
            <OwnerAndStatsSection materi={materi} />
          </div>
        </div>
      </div>

      <div>
        <MainSection materi={materi} />
      </div>

      <div className={`mt-4 ${isOwner && 'hidden'}`}>
        <RatingSection alatmusik={alatmusik || ''} id={id || ''}
          currentUser={currentUser} setParentMateri={setMateri} setLoginModal={setLoginModal} />
      </div>
    </div>
  )
}

export default Materi