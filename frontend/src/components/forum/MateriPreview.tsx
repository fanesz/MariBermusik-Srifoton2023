import { ArrowRightIcon, EyeIcon, StarIcon } from "@heroicons/react/24/solid";
import { TListMateri } from "../../types/Materi";
import { getAlatMusikImg } from "../../utils/AlatMusikList";
import { convertCreatedAt } from "../../utils/utils";
import { useNavigate } from "react-router-dom";

const MateriPreview = (props: { className?: string, materi: TListMateri }) => {
  const { className, materi } = props;
  const navigate = useNavigate();

  const image = (
    <img
      className="w-full h-full object-cover rounded-md"
      src={getAlatMusikImg(materi.alatMusik)}
    />
  )
  const tingkatan = (
    <div className="flex gap-2">
      <div>
        {materi.data.tingkatan === 'pemula' ? (
          <div className="text-sm bg-green-300 w-fit px-2 pt-0.5 rounded-md text-white">
            Pemula
          </div>
        ) : materi.data.tingkatan === 'menengah' ? (
          <div className="text-sm bg-orange-300 w-fit px-2 pt-0.5 rounded-md text-white">
            Menengah
          </div>
        ) : materi.data.tingkatan === 'sulit' ? (
          <div className="text-sm bg-red-300 w-fit px-2 pt-0.5 rounded-md text-white">
            Sulit
          </div>
        ) : (<></>)}
      </div>
      <div className="font-extrabold">·</div>
      <div className="mt-auto mb-auto text-sm  text-gray-700">
        {convertCreatedAt(materi.data.createdAt)}
      </div>
    </div>
  )
  const title_desc = (
    <div>
      <div className="text-xl font-medium">
        {materi.data.nama}
      </div>
      <div className="text-gray-800">
        {materi.data.deskripsi}
      </div>
    </div>
  )
  const footer = (
    <div className="flex gap-3">
      <div className="flex gap-1">
        {materi.data.pengunjung}
        <EyeIcon className="h-3.5 w-3.5 mt-auto mb-auto" />
      </div>
      <div className="font-extrabold">·</div>
      <div className="flex gap-0.5">
        {materi.data.rating.reduce((a, b) => a + b, 0) / materi.data.rating.length}
        <StarIcon className="h-3.5 w-3.5 mt-auto mb-auto fill-yellow-900" />
        <span className="text-xs mt-auto mb-auto text-gray-500">({materi.data.rating.length})</span>
      </div>
    </div>
  )
  const go_button = (
    <div className="flex h-full justify-end">
      <div className="bg-green-400 flex w-12 rounded-e-md justify-end hover:w-1/2 hover:transition-all ease-in-out duration-300 cursor-pointer" onClick={() => navigate(`/materi/${materi.alatMusik}/${materi.materiID}`)}>
        <ArrowRightIcon className="h-6 w-6 mt-auto mb-auto me-1 fill-white" />
      </div>
    </div>
  )

  return (
    <div className={`w-full h-40 border border-opacity-30 border-gray-700 shadow-md rounded-md flex ${className}`}>
      <div className="w-1/5">
        {image}
      </div>

      <div className="px-6 w-3/5">
        <div className="h-1/5 pt-2">
          {tingkatan}
        </div>

        <div className="h-3/5">
          {title_desc}
        </div>

        <div className="pt-1">
          {footer}
        </div>
      </div>

      <div className="w-1/5">
        {go_button}
      </div>
    </div>
  )
}

export default MateriPreview