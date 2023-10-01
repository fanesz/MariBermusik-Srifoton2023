import drum from "../assets/drum.jpg";
import gitar from "../assets/gitar.jpg";
import piano from "../assets/piano.jpg";
import biola from "../assets/biola.png";

type TAlatMusik = {
  nama: string;
  img: string;
}

const alatMusikList: TAlatMusik[] = [
  { nama: 'drum', img: drum },
  { nama: 'gitar', img: gitar },
  { nama: 'piano', img: piano },
  { nama: 'biola', img: biola },
]

export const getAlatMusikImg = (alatMusik: string) => {
  return alatMusikList.find((item) => item.nama === alatMusik)?.img;
}