import { QuickDB } from "quick.db";
const db = new QuickDB();
const db_materi = db.table("materi");
const db_loggedUser = db.table("loggedUser");

export const getMateriByAlatMusik = async (req, res) => {
  try { // params: { alatMusik?, materiID? }
    const params = req.query;

    if (params.alatMusik && params.materiID) {
      const materiByID = (await db_materi.get(params.alatMusik)).find(m => m.materiID == params.materiID)
      res.json({ status: true, data: materiByID || [] });

    } else if (params.alatMusik && !params.materiID) {
      const materiByAlatMusik = await db_materi.get(params.alatMusik);
      res.json({ status: true, data: materiByAlatMusik || [] });

    } else if (!params.alatMusik && !params.materiID) {
      const allMateri = await db_materi.all();
      res.json({ status: true, data: allMateri || [] });

    } else {
      res.json({ status: false });

    }
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const getAlatMusikList = async (req, res) => {
  try {
    const alatMusikList = (await db_materi.all()).map(m => ({ id: m.id, totalMateri: m.value.length }));
    res.json({ status: true, data: alatMusikList });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const createMateri = async (req, res) => {
  try { // body: { loginID, alatMusik, materi }
    const user = await db_loggedUser.get(req.body.loginID);
    const prevMateri = await db_materi.get(req.body.alatMusik) || [];
    const userInput = JSON.parse(req.body.materi);
    const newMateri = [
      ...prevMateri,
      {
        "materiID": prevMateri.length,
        "owner": user.id,
        "data": {
          "nama": userInput.nama,
          "deskripsi": userInput.deskripsi,
          "tingkatan": userInput.tingkatan,
          "rating": [],
          "pengunjung": 0,
          "createdAt": new Date(),
          "updatedAt": new Date(),
          "daftarMateri": userInput.daftarMateri
        }
      }];

    await db_materi.set(req.body.alatMusik, newMateri);
    res.json({ status: true, materiID: prevMateri.length });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const editMateriByID = async (req, res) => {
  try { // body: { alatMusik, materiID, loginID, materi }
    const materi = await db_materi.get(req.body.alatMusik);
    const materiToUpdate = materi.find(m => m.materiID == req.body.materiID);
    const newMateri = materi.filter(m => m.materiID != req.body.materiID);
    const userInput = JSON.parse(req.body.materi);
    const updatedMateri = {
      "materiID": materiToUpdate.materiID,
      "owner": materiToUpdate.owner,
      "data": {
        "nama": userInput.nama,
        "deskripsi": userInput.deskripsi,
        "tingkatan": userInput.tingkatan,
        "rating": materiToUpdate.data.rating,
        "pengunjung": materiToUpdate.data.pengunjung,
        "createdAt": materiToUpdate.data.createdAt,
        "updatedAt": new Date(),
        "daftarMateri": userInput.daftarMateri
      }
    };
    await db_materi.set(req.body.alatMusik, [...newMateri, updatedMateri]);
    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const deleteMateriByID = async (req, res) => {
  try { // params: { alatMusik, materiID }
    const params = req.query;
    const materi = await db_materi.get(params.alatMusik);
    const newMateri = materi.filter(m => m.materiID != params.materiID);
    await db_materi.set(params.alatMusik, newMateri);
    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}



