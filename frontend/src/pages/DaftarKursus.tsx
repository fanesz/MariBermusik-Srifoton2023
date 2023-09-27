import { useEffect, useState } from "react";
import { getAlatMusikList } from "../api/services";

const DaftarKursus = () => {

  const [alatMusik, setAlatMusik] = useState<string[]>([]);

  const fetchData = async () => {
    const res = await getAlatMusikList();
    let temp: string[] = [];
    res.data.map((item: any) => temp.push(item.id))
    setAlatMusik(temp);


  }

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div>
      {alatMusik.map((item, index) => (
        <div key={index}>
          {item}
        </div>
      ))}
    </div>
  )
}

export default DaftarKursus