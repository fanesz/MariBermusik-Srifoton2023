import React from "react";
import { TFilterBy, TListMateri } from "../../../types/Types";
import { FunnelIcon } from "@heroicons/react/24/solid"
import FilterByAlatMusik from "./FilterByAlatMusik"
import FilterByStats from "./FilterByStats"
import FilterByKesulitan from "./FilterByKesulitan";

interface TProps {
  materi: TListMateri[],
  filterBy: TFilterBy,
  setFilterBy: React.Dispatch<React.SetStateAction<TFilterBy>>,
  setFilteredMateri: React.Dispatch<React.SetStateAction<TListMateri[]>>
}
type TListFilterer = {
  [key: string]: (a: TListMateri, b: TListMateri) => number;
};
const MenuFilter = (props: TProps) => {
  const { materi, setFilteredMateri, filterBy, setFilterBy } = props;

  // algoritma filtering
  const handleFilteringMateri = (filterer: TFilterBy, newestFilter: keyof TFilterBy | null, filterCondition: boolean) => {
    const filterByDate = (a: TListMateri, b: TListMateri, reverse: boolean) => {
      const dateA = new Date(a.data.createdAt).getTime();
      const dateB = new Date(b.data.createdAt).getTime();
      return reverse ? dateA - dateB : dateB - dateA;
    }
    const filterByRating = (a: TListMateri, b: TListMateri, reverse: boolean) => {
      let ratingA = 0;
      let ratingB = 0;
      for (const item of a.data.rating) {
        ratingA += item[1];
      }
      for (const item of b.data.rating) {
        ratingB += item[1];
      }
      ratingA = ratingA / a.data.rating.length
      ratingB = ratingB / b.data.rating.length
      return reverse ? ratingA - ratingB : ratingB - ratingA;
    }
    const filterByPengunjung = (a: TListMateri, b: TListMateri, reverse: boolean) => {
      const pengunjungA = a.data.pengunjung;
      const pengunjungB = b.data.pengunjung;
      return reverse ? pengunjungA - pengunjungB : pengunjungB - pengunjungA;
    }
    const listFilterer: TListFilterer = {
      date_newest: (a: TListMateri, b: TListMateri) => filterByDate(a, b, false),
      date_oldest: (a: TListMateri, b: TListMateri) => filterByDate(a, b, true),
      rating_highest: (a: TListMateri, b: TListMateri) => filterByRating(a, b, false),
      rating_lowest: (a: TListMateri, b: TListMateri) => filterByRating(a, b, true),
      pengunjung_most: (a: TListMateri, b: TListMateri) => filterByPengunjung(a, b, false),
      pengunjung_least: (a: TListMateri, b: TListMateri) => filterByPengunjung(a, b, true)
    }
    setFilteredMateri(
      prev => {
        let materiToSet = prev;
        if (filterer.date_newest) {
          materiToSet = materiToSet.sort((a: TListMateri, b: TListMateri) => filterByDate(a, b, false))
        }
        if (filterer.date_oldest) {
          materiToSet = materiToSet.sort((a: TListMateri, b: TListMateri) => filterByDate(a, b, true))
        }
        if (filterer.rating_highest) {
          materiToSet = materiToSet.sort((a: TListMateri, b: TListMateri) => filterByRating(a, b, false))
        }
        if (filterer.rating_lowest) {
          materiToSet = materiToSet.sort((a: TListMateri, b: TListMateri) => filterByRating(a, b, true))
        }
        if (filterer.pengunjung_most) {
          materiToSet = materiToSet.sort((a: TListMateri, b: TListMateri) => filterByPengunjung(a, b, false))
        }
        if (filterer.pengunjung_least) {
          materiToSet = materiToSet.sort((a: TListMateri, b: TListMateri) => filterByPengunjung(a, b, true))
        }
        if (filterCondition && newestFilter && filterer[newestFilter]) {
          materiToSet = materiToSet.sort(listFilterer[newestFilter]);
        }
        return materiToSet
      }
    )
  };

  // handle filter alat musik dan kesulitan
  const filterAlatMusikAndKesulitan = (alatMusik: string, kesulitan: string[]) => {
    let newMateri: TListMateri[] = [];
    const filterByKesulitan = (materi: TListMateri) => kesulitan.includes(materi.data.tingkatan);
    const filterByAlatMusik = (materi: TListMateri) => materi.alatMusik === alatMusik;
    if (alatMusik !== 'semua' && kesulitan.length !== 0) {
      const materiByAlatMusik = materi.filter(filterByKesulitan);
      newMateri = materiByAlatMusik.filter(filterByAlatMusik);
    } else if (alatMusik !== 'semua' && kesulitan.length === 0) {
      newMateri = materi.filter(filterByAlatMusik)
    } else if (alatMusik === 'semua' && kesulitan.length !== 0) {
      newMateri = materi.filter(filterByKesulitan);
    } else if (alatMusik === 'semua' && kesulitan.length === 0) {
      newMateri = materi;
    }
    setFilteredMateri(newMateri);
    handleFilteringMateri(filterBy, null, false);
  };

  return (
    <div>
      <div className="md:flex hidden">
        <FunnelIcon className="w-4 h-4 mt-auto mb-auto me-1" />
        <div className="text-lg font-medium text-gray-700">
          Filter
        </div>
      </div>
      <div className="border border-gray-400 w-full rounded-md px-3 ps-5 py-2 pb-4 shadow-md mt-1">

        <div className="mt-2">
          <FilterByAlatMusik filterBy={filterBy} setFilterBy={setFilterBy} handleFiltering={filterAlatMusikAndKesulitan} />
        </div>

        <div>
          <FilterByStats filterBy={filterBy} setFilterBy={setFilterBy} handleFiltering={handleFilteringMateri} />
        </div>

        <div className="mt-2">
          <FilterByKesulitan filterBy={filterBy} setFilterBy={setFilterBy} handleFiltering={filterAlatMusikAndKesulitan} />
        </div>

      </div>
    </div >
  )
}
export default MenuFilter