import { useEffect, useState } from "react";
import { TListMateri } from "../../types/Types";
import { getMateriByID } from "../../api/services";
import TransitionIn from "../_shared/TransitionIn";
import MateriPreview from "../Materi/_shared/MateriPreview";

interface TProps {
  UUID: string
};
const OwnedMateri = (props: TProps) => {
  const { UUID } = props;

  const [listMateri, setListMateri] = useState<TListMateri[]>([]);
  
  // fetch data materi berdasarkan UUID
  const getMateri = async (UUID: string) => {
    const res = await getMateriByID(UUID);
    if (res.status) setListMateri(res.data);
  };
  useEffect(() => {
    getMateri(UUID);
  }, []);

  return (
    <div>
      {listMateri.length !== 0 && (
        <div className='mt-5'>
          <div className='px-5 py-3 border border-gray-300 rounded-md'>
            <div className='text-xl mb-2.5 font-medium text-gray-800'>
              Materi
            </div>
            {listMateri?.map((materi, index) => (
              <TransitionIn key={index} from='bottom' delay={index * 200}>
                <MateriPreview
                  className='mb-5'
                  materi={materi}
                />
              </TransitionIn>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default OwnedMateri