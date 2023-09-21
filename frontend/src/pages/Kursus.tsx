import { useParams } from "react-router-dom";

const Kursus = () => {

  const { id } = useParams();

  console.log(id);


  return (
    <div>
      Ini kursus {id}
    </div>
  )
}

export default Kursus