import { TFilterBy } from "../../../types/Types";

type TProps = {
  filterBy: TFilterBy,
  setFilterBy: React.Dispatch<React.SetStateAction<TFilterBy>>,
  handleFiltering: (alatMusik: string, kesulitan: string[]) => void
}
const FilterByKesulitan = (props: TProps) => {
  const { setFilterBy, filterBy, handleFiltering } = props;

  const handleFilterKesulitan = (kesulitan: string) => {
    kesulitan = kesulitan.toLowerCase();
    setFilterBy(prev => {
      let newKesulitan: string[] = [];
      if (prev.kesulitan.includes(kesulitan)) {
        newKesulitan = [...prev.kesulitan].filter(m => m !== kesulitan);
      } else {
        newKesulitan = [...prev.kesulitan, kesulitan];
      }
      handleFiltering(filterBy.alatMusik, newKesulitan);
      return {
        ...prev,
        kesulitan: newKesulitan
      }
    });
  };

  const kesulitan = [
    ['Pemula', 'bg-green-400 hover:bg-green-600'],
    ['Menengah', 'bg-orange-400 hover:bg-orange-600'],
    ['Sulit', 'bg-red-400 hover:bg-red-600']
  ]

  return (
    <div>
      <div>
        Kesulitan
      </div>
      {kesulitan.map((item, index) => (
        <div key={index}
          className={`w-fit px-3 py-1 rounded-md cursor-pointer opacity-90 mt-1 border shadow-sm truncate ${item[1]} ${filterBy.kesulitan.includes(item[0].toLowerCase()) ? 'border-black text-black' : 'text-white'}`}
          onClick={() => handleFilterKesulitan(item[0])}>
          {item[0]}
        </div>
      ))}
    </div>
  )
}
export default FilterByKesulitan