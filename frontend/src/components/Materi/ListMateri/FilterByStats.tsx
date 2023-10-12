import { TFilterBy } from "../../../types/Types"

type TProps = {
  filterBy: TFilterBy,
  setFilterBy: React.Dispatch<React.SetStateAction<TFilterBy>>,
  handleFiltering: (filterer: TFilterBy, newestFilter: keyof TFilterBy | null, filterCondition: boolean) => void
}
const FilterByStats = (props: TProps) => {
  const { setFilterBy, filterBy, handleFiltering } = props;

  const filterByOption = [
    { title: 'Tanggal Upload', data: [{ key: 'date_newest', text: 'Terbaru' }, { key: 'date_oldest', text: 'Terlama' }] },
    { title: 'Rating', data: [{ key: 'rating_highest', text: 'Tertinggi' }, { key: 'rating_lowest', text: 'Terendah' }] },
    { title: 'Pengunjung', data: [{ key: 'pengunjung_most', text: 'Terbanyak' }, { key: 'pengunjung_least', text: 'Tersedikit' }] },
  ]

    // handle radio button filter
    const handleCheckBox = (key: string) => {
      if (key === "date_newest") {
        setFilterBy(prev => {
          const newFilterBy = {
            ...prev,
            date_newest: !prev.date_newest,
            date_oldest: false,
          }
          handleFiltering(newFilterBy, 'date_newest', !prev.date_newest);
          return newFilterBy;
        });
      } else if (key === "date_oldest") {
        setFilterBy(prev => {
          const newFilterBy = {
            ...prev,
            date_newest: false,
            date_oldest: !prev.date_oldest,
          }
          handleFiltering(newFilterBy, 'date_oldest', !prev.date_oldest);
          return newFilterBy;
        });
      } else if (key === "rating_highest") {
        setFilterBy(prev => {
          const newFilterBy = {
            ...prev,
            rating_highest: !prev.rating_highest,
            rating_lowest: false,
          }
          handleFiltering(newFilterBy, 'rating_highest', !prev.rating_highest);
          return newFilterBy;
        });
      } else if (key === "rating_lowest") {
        setFilterBy(prev => {
          const newFilterBy = {
            ...prev,
            rating_highest: false,
            rating_lowest: !prev.rating_lowest,
          }
          handleFiltering(newFilterBy, 'rating_lowest', !prev.rating_lowest);
          return newFilterBy;
        });
      } else if (key === "pengunjung_most") {
        setFilterBy(prev => {
          const newFilterBy = {
            ...prev,
            pengunjung_most: !prev.pengunjung_most,
            pengunjung_least: false,
          }
          handleFiltering(newFilterBy, 'pengunjung_most', !prev.pengunjung_most);
          return newFilterBy;
        });
      } else if (key === "pengunjung_least") {
        setFilterBy(prev => {
          const newFilterBy = {
            ...prev,
            pengunjung_most: false,
            pengunjung_least: !prev.pengunjung_least,
          }
          handleFiltering(newFilterBy, 'pengunjung_least', !prev.pengunjung_least,);
          return newFilterBy;
        });
      }
  
    }

  return (
    <div>
      {filterByOption.map((items, index) => (
        <div key={index} className="mt-3">
          <div>
            {items.title}
          </div>
          {items.data.map((item, index) => (
            <div key={index} onClick={() => handleCheckBox(item.key)}>
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