import { QuickDB } from "quick.db";
const db = new QuickDB();
const db_materi = db.table("materi");
import struktur from "../struktur.json" assert { type: "json" };

export const getMateri = async (req, res) => {
  try {
    console.log(req.query);
    const materi = await db_materi.get(req.query.alatMusik);
    res.json({ status: materi ? true : false, data: materi || null });
  } catch (error) {
    console.log(error);
    res.json({ status: false, data: null });
  }
}

export const setMateri = async (req, res) => {
  try {
    const setMateri = await db_materi.set(`gitar`, struktur);
    res.json(setMateri);
  } catch (error) {
    console.log(error);
  }
}
