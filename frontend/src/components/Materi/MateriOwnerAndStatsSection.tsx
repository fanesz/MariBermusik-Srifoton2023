import { EyeIcon, StarIcon } from "@heroicons/react/24/solid"
import { TListMateri, TUser } from "../../types/Types"
import { convertCreatedAt, ratingAverage } from "../../utils/utils"
import TransitionIn from "../_shared/TransitionIn"
import { useNavigate } from "react-router-dom"
import profile from '../../assets/profile.png';
import { useEffect, useState } from "react"
import { getUserByParams } from "../../api/services"

type TProps = {
  materi: TListMateri,
}
const MateriOwnerAndStatsSection = (props: TProps) => {
  const { materi } = props

  const navigate = useNavigate();
  const [materiOwner, setMateriOwner] = useState<TUser>({} as TUser);

  // fetch data owner dari UUID
  useEffect(() => {
    const fetchData = async () => {
      const resOwner = await getUserByParams(null, null, materi?.owner);
      if (resOwner.status) setMateriOwner(resOwner.data);
    }
    if (materi) fetchData();
  }, [materi]);

  return materi?.data && (
    <TransitionIn from="right">
      <div className="flex md:gap-3 mt-4 text-gray-600">
        <div className="mt-auto">
          <div className="md:hidden block text-right h-fit ms-auto">
            {convertCreatedAt(materi.data.createdAt)}
          </div>

          <div className="flex gap-3 mt-auto pb-1 ">

            <div className="flex gap-1">
              {materi.alatMusik[0].toUpperCase() + materi.alatMusik.slice(1)}
            </div>

            <div className="font-extrabold">·</div>

            <div className="flex gap-1">
              {materi.data.pengunjung}
              <EyeIcon className="h-3.5 w-3.5 mt-auto mb-auto" />
            </div>

            <div className="font-extrabold">·</div>

            <div className="flex gap-0.5">
              {ratingAverage(materi.data.rating) || 0}
              <StarIcon className="h-3.5 w-3.5 mt-auto mb-auto fill-yellow-900" />
              <span className="text-xs mt-auto mb-auto text-gray-500">({materi.data.rating.length})</span>
            </div>

            <div className="font-extrabold">·</div>

            <div className="md:block hidden">
              {convertCreatedAt(materi.data.createdAt)}
            </div>
          </div>
        </div>

        <div
          className="flex gap-3 md:border border-gray-400 w-fit my-auto px-3 py-1 rounded-xl md:shadow-md hover:-translate-y-1 transition-transform duration-200 cursor-pointer"
          onClick={() => navigate(`/profile/${materiOwner.username}`)}>
          <div>
            <img src={materiOwner?.img || profile} className="w-10 h-10 rounded-full object-cover" />
          </div>
          <div className="my-auto md:block hidden">
            {materiOwner?.username}
          </div>
        </div>
      </div>
    </TransitionIn>

  )
}

export default MateriOwnerAndStatsSection