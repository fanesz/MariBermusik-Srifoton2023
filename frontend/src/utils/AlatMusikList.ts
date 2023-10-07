import bass from "../assets/alatMusik/bass.jpg";
import biola from "../assets/alatMusik/biola.png";
import cello from "../assets/alatMusik/cello.jpg";
import drum from "../assets/alatMusik/drum.jpg";
import gitar from "../assets/alatMusik/gitar.jpg";
import gitarListrik from "../assets/alatMusik/gitarListrik.jpg";
import piano from "../assets/alatMusik/piano.jpg";
import trompoet from "../assets/alatMusik/trompet.jpg";
import ukulele from "../assets/alatMusik/ukulele.jpg";

type TAlatMusik = {
  nama: string;
  img: string;
}

const alatMusikList: TAlatMusik[] = [
  {nama: 'bass', img: bass},
  {nama: 'biola', img: biola},
  {nama: 'cello', img: cello},
  {nama: 'drum', img: drum},
  {nama: 'gitar', img: gitar},
  {nama: 'gitar listrik', img: gitarListrik},
  {nama: 'piano', img: piano},
  {nama: 'trompoet', img: trompoet},
  {nama: 'ukulele', img: ukulele},
]

export const getAlatMusikImg = (alatMusik: string) => {
  return alatMusikList.find((item) => item.nama === alatMusik)?.img;
}