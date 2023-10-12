import { TListMateri } from "../../../types/Types"
import Input from "../../_shared/Input";
import TransitionIn from "../../_shared/TransitionIn";
import MateriPreview from "../_shared/MateriPreview";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface TProps {
  filteredMateri: TListMateri[],
  setFilteredMateri: React.Dispatch<React.SetStateAction<TListMateri[]>>
}
const MateriSection = (props: TProps) => {
  const { filteredMateri, setFilteredMateri } = props;

  const [cariMateri, setCariMateri] = useState('');

  // handle cari materi
  const handleSetCariMateri = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCariMateri(e.target.value);
    setFilteredMateri(prev => {
      const filteredItem = prev.filter((materi: TListMateri) => materi.data.nama.toLowerCase().includes(e.target.value.toLowerCase()));
      const otherItem = prev.filter((materi: TListMateri) => !materi.data.nama.toLowerCase().includes(e.target.value.toLowerCase()));
      return filteredItem.concat(otherItem);
    });
  }
  
  return (
    <div className="md:w-4/6 px-4">
      <div>
        <TransitionIn>
          <Input className='shadow-md' type='text' label='Cari Materi' icon={<MagnifyingGlassIcon />}
            value={cariMateri} onChange={handleSetCariMateri} />
        </TransitionIn>
      </div>
      <div className="mt-5">
        {filteredMateri?.map((materi, index) => (
          <TransitionIn key={index} from='bottom' delay={index * 200}>
            <MateriPreview
              className='mb-5'
              materi={materi}
            />
          </TransitionIn>
        ))}
      </div>
    </div>
  )
}

export default MateriSection