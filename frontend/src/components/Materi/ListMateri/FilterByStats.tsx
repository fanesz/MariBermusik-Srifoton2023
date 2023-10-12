import { TFilterBy } from "../../../types/Types"

interface TProps {
  filterBy: TFilterBy,
  setFilterBy: React.Dispatch<React.SetStateAction<TFilterBy>>,
  handleFiltering: (filterer: TFilterBy, newestFilter: keyof TFilterBy | null, filterCondition: boolean) => void
}
const FilterByStats = (props: TProps) => {
  const { setFilterBy, filterBy, handleFiltering } = props;

  // list opsi filter
  const filterByOption = [
    { title: 'Tanggal Upload', data: [{ key: 'date_newest', text: 'Terbaru' }, { key: 'date_oldest', text: 'Terlama' }] },
    { title: 'Rating', data: [{ key: 'rating_highest', text: 'Tertinggi' }, { key: 'rating_lowest', text: 'Terendah' }] },
    { title: 'Pengunjung', data: [{ key: 'pengunjung_most', text: 'Terbanyak' }, { key: 'pengunjung_least', text: 'Tersedikit' }] },
  ]

  // handle radio button filter
  const handleCheckBox = (key: keyof TFilterBy) => {
    const filteredOption = filterByOption.find(m => m.data.find(n => n.key === key));
    const oppositeOption = filteredOption?.data.find(m => m.key !== key)?.key as keyof TFilterBy;
    setFilterBy(prev => {
      const newFilterBy = {
        ...prev,
        [key]: !prev[key],
        [oppositeOption]: false,
      }
      handleFiltering(newFilterBy, key, !prev[key]);
      return newFilterBy;
    });
  }

  return (
    <div>
      {filterByOption.map((items, index) => (
        <div key={index} className="mt-3">
          <div>
            {items.title}
          </div>
          {items.data.map((item, index) => (
            <div key={index} onClick={() => handleCheckBox(item.key as keyof TFilterBy)}>
              <input
                className="focus:ring-0 me-2 rounded"
                type="checkbox" checked={!!filterBy[item.key as keyof TFilterBy]}
                readOnly={true} />
              <label className="text-gray-800">{item.text}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
export default FilterByStats