import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid"
import TransitionIn from "../../_shared/TransitionIn"
import { TListMateri } from "../../../types/Types"
import { useState } from "react"
import DeleteMateriAlert from "../DeleteMateriAlert"
import CreateMateriModal from "../CreateMateriModal"

type TProps = {
  materi: TListMateri,
  alatmusik: string,
  id: string
}
const EditDeleteSection = (props: TProps) => {
  const { materi, alatmusik, id } = props

  const [deleteAlertModal, setDeleteAlertModal] = useState(false);
  const [createMateriModal, setCreateMateriModal] = useState(false);

  // handler delete dan edit materi
  const handleDeleteMateri = async () => {
    setDeleteAlertModal(true);
  }
  const handleEditMateri = () => {
    setCreateMateriModal(true);
  }

  return materi?.data && (
    <div>
      <DeleteMateriAlert isOpen={deleteAlertModal} setModal={setDeleteAlertModal} judul={materi?.data?.nama} alatmusik={alatmusik} id={id} />
      <CreateMateriModal isOpen={createMateriModal} setModal={setCreateMateriModal} prevMateri={materi} />

      <TransitionIn delay={100} from="left">
        <div className="flex gap-3">
          <div
            className="p-2 bg-yellow-700 hover:bg-yellow-800 cursor-pointer rounded-md"
            onClick={handleEditMateri}>
            <PencilIcon className="w-5 h-5 my-auto fill-white" />
          </div>
          <div
            className="p-2 bg-red-400 hover:bg-red-600 cursor-pointer rounded-md"
            onClick={handleDeleteMateri}>
            <TrashIcon className="w-5 h-5 my-auto fill-white" />
          </div>
        </div>
      </TransitionIn>
    </div>
  )
}

export default EditDeleteSection