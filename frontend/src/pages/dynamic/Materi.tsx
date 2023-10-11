import { useParams } from "react-router-dom";
import { addPengunjung, getMateriByAlatMusik, getUserByParams, userIsLogin } from "../../api/services";
import { useEffect, useState } from "react";
import { TListMateri } from "../../types/Types";
import MateriTitleSection from "../../components/Materi/MateriTitleSection";
import MateriEditDeleteSection from "../../components/Materi/MateriEditDeleteSection";
import MateriOwnerAndStatsSection from "../../components/Materi/MateriOwnerAndStatsSection";
import MateriIsiSection from "../../components/Materi/MateriIsiSection";
import MateriRatingSection from "../../components/Materi/MateriRatingSection";

const Materi = () => {
  const { alatmusik, id } = useParams();
  const [materi, setMateri] = useState<TListMateri>({} as TListMateri);
  const [isOwner, setIsOwner] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [rating, setRating] = useState(-1);

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
  }
  useEffect(() => {
    fetchMateriOwnerAndRating();
    // add Pengunjung saat page di akses
    addPengunjung(alatmusik || '', id || '');
  }, []);

  return (
    <div className="w-full max-w-7xl transform ms-auto me-auto md:mt-20 mt-10 lg:px-12 px-5">
      <div>
        <MateriTitleSection materi={materi} />
      </div>

      <div>
        <div className={`pb-3 flex ${isOwner ? 'justify-between' : 'justify-end'}`}>
          <div className={`mt-auto ${isOwner ? 'block' : 'hidden'}`}>
            <MateriEditDeleteSection materi={materi} alatmusik={alatmusik || ''} id={id || ''} />
          </div>
          <div>
            <MateriOwnerAndStatsSection materi={materi} />
          </div>
        </div>
      </div>

      <div>
        <MateriIsiSection materi={materi} />
      </div>

      <div className={`mt-4 ${isOwner && 'hidden'}`}>
        <MateriRatingSection alatmusik={alatmusik || ''} id={id || ''} currentUser={currentUser} rating={rating} setRating={setRating} />
      </div>
    </div>
  )
}

export default Materi