import { useParams } from "react-router-dom";

const Materi = () => {

  const { alatmusik, id } = useParams();

  console.log(alatmusik, id);
  

  return (
    <div>
      Materi
    </div>
  )
}

export default Materi