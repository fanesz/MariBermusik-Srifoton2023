import { TListMateri, TMateri } from "../../types/Materi";

const MateriPreview = (props: { className?: string, materi: TMateri, alatMusik: string }) => {
  const { className, materi } = props;

  console.log(materi);
  

  return (
    <div className={`w-full border1 ${className}`}>
    </div>
  )
}

export default MateriPreview