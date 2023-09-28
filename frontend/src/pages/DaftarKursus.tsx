import { useEffect, useState } from "react";
import { getAlatMusikList } from "../api/services";
import { Link } from 'react-router-dom';

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
        <div className="bg-brown-500 border border-blue-900">
          <Link to={`/daftarkursus/${item}`} key={index}>
            {item}
          </Link>
        </div>
      ))}
    </div>
  )
}

export default DaftarKursus