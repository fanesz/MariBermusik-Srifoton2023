import { useEffect, useState } from "react";
import ErrSuccessMsg from "../../_shared/ErrSuccessMsg"
import TransitionIn from "../../_shared/TransitionIn"
import { IErrSuccessMsg, TListMateri } from "../../../types/Types";
import { getRatingList, updateRating } from "../../../api/services";
import { Rating } from "@material-tailwind/react";

interface TProps {
  alatmusik: string,
  id: string,
  currentUser: string,
  setParentMateri: React.Dispatch<React.SetStateAction<TListMateri>>,
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>
};
const RatingSection = (props: TProps) => {
  const { alatmusik, id, currentUser, setParentMateri, setLoginModal } = props;

  const [rating, setRating] = useState(-1);
  const [errSuccessMsg, setErrSuccessMsg] = useState<IErrSuccessMsg>({
    type: "", message: ""
  });

  // mendapatkan list rating
  useEffect(() => {
    const fetchData = async () => {
      const resRatingList = await getRatingList(alatmusik || '', id || '');
      if (resRatingList.status) {
        const currentUserRating = resRatingList.data.find((m: [string, number]) => m[0] === currentUser);
        setRating(currentUserRating ? currentUserRating[1] : 0);
      };
    };
    currentUser ? fetchData() : setRating(0);
  }, [currentUser]);

  // handler untuk menampilkan pesan error/success
  const handleSetErrmsg = (msg: string) => {
    setErrSuccessMsg({ type: 'error', message: msg });
  };
  const handleSetSuccessmsg = (msg: string) => {
    setErrSuccessMsg({ type: 'success', message: msg });
  };

  // handler untuk update rating
  const handleUpdateRating = async (input: number) => {
    if (!currentUser) return setLoginModal(true);
    setRating(input);
    const res = await updateRating(alatmusik || '', id || '', currentUser, input.toString());
    if (res.status) {
      handleSetSuccessmsg('Rating saved!');
      setParentMateri(prev => {
        const prevRating = prev.data.rating;
        const index = prevRating.findIndex(([user]) => user === currentUser);
        if (index !== -1) {
          prevRating[index][1] = input;
        } else {
          prevRating.push([currentUser, input]);
        }
        return { ...prev };
      });
    } else {
      handleSetErrmsg('Failed saving rating!');
    };
  };

  return rating !== -1 && (
    <TransitionIn from="bottom">
      <div className="flex justify-center">
        {errSuccessMsg.message.length === 0 ? (
          <Rating value={rating} onChange={handleUpdateRating} />
        ) : (
          <div className="ms-7">
            <ErrSuccessMsg errSuccessMsg={errSuccessMsg} setErrSuccessMsg={setErrSuccessMsg} />
          </div>
        )}
      </div>
    </TransitionIn>
  )
}

export default RatingSection