import { Option, Select } from "@material-tailwind/react"
import { useEffect, useState } from "react";
import { getAlatMusikList } from "../../../api/services";
import { TFilterBy } from "../../../types/Types";

type TListAlatMusik = {
  id: string,
  totalMateri: number
};
interface TProps {
  filterBy: TFilterBy,
  setFilterBy: React.Dispatch<React.SetStateAction<TFilterBy>>,
  handleFiltering: (alatMusik: string, kesulitan: string[]) => void
};
const FilterByAlatMusik = (props: TProps) => {
  const { setFilterBy, filterBy, handleFiltering } = props;

  const [listAlatMusik, setListAlatMusik] = useState<TListAlatMusik[]>([]);

  const fetchListAlatMusik = async () => {
    const res = await getAlatMusikList();
    if (res.status) {
      setListAlatMusik([
        { id: 'semua', totalMateri: -1 },
        ...res.data.filter((item: TListAlatMusik) => item.totalMateri >= 1)
      ]);
    };
  };
  useEffect(() => {
    fetchListAlatMusik();
  }, []);

  const handleFilterAlatMusik = (alatMusik: string) => {
    setFilterBy(prev => {
      return {
        ...prev,
        alatMusik: alatMusik
      };
    });
    handleFiltering(alatMusik, filterBy.kesulitan);
  };

  return (
    <div>
      <Select label="Alat Musik" menuProps={{ className: 'p-0 py-1' }} aria-label="Alat musik">
        {listAlatMusik.map((alatMusik, index) => (
          <Option key={index} value={alatMusik.id}
            onClick={() => handleFilterAlatMusik(alatMusik.id)}>
            {alatMusik.id.charAt(0).toUpperCase() + alatMusik.id.slice(1) + (alatMusik.totalMateri !== -1 ? ` (${alatMusik.totalMateri})` : '')}
          </Option>
        ))}
      </Select>
    </div>
  )
}

export default FilterByAlatMusik