import { TListMateri } from "../../../types/Types"

interface TProps {
  materi: TListMateri
};
const TitleSection = (props: TProps) => {
  const { materi } = props;
  
  return materi?.data && (
    <div className="text-center flex justify-center gap-3">
      <div className="text-2xl font-semibold text-gray-700">
        {materi?.data?.nama}
      </div>
      <div className="my-auto">
        {materi?.data?.tingkatan && (
          <div
            className={`text-sm ${{ pemula: 'bg-green-300', menengah: 'bg-orange-300', sulit: 'bg-red-300' }[materi.data.tingkatan.toLocaleLowerCase()]} w-fit px-2 py-0.5 rounded-md text-white`}>
            {materi.data.tingkatan}
          </div>
        )}
      </div>
    </div>
  )
}

export default TitleSection