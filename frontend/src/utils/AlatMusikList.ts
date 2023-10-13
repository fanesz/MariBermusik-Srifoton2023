import bass from "../assets/alatMusik/bass.webp";
import biola from "../assets/alatMusik/biola.webp";
import cello from "../assets/alatMusik/cello.webp";
import drum from "../assets/alatMusik/drum.webp";
import gitar from "../assets/alatMusik/gitar.webp";
import gitarListrik from "../assets/alatMusik/gitarListrik.webp";
import piano from "../assets/alatMusik/piano.webp";
import trompoet from "../assets/alatMusik/trompet.webp";
import ukulele from "../assets/alatMusik/ukulele.webp";

type TAlatMusik = {
  nama: string;
  img: string;
};
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
];
export const getAlatMusikImg = (alatMusik: string) => {
  return alatMusikList.find((item) => item.nama === alatMusik)?.img;
}