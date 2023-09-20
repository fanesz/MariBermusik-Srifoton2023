import Database from "../config/database.js";
const db_materi = new Database("materi");
import struktur from "../struktur.json" assert { type: "json" };

export const getMateri = async (req, res) => {
  try {
    const materi = await db_materi.get();
    res.json(materi);
  } catch (error) {
    res.json(error);
  }
}

export const setMateri = async (req, res) => {
  try {
    // await db_materi.set(`tes.data`, struktur);
  } catch (error) {
    console.log(error);
  }
}
