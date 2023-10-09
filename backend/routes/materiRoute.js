import express from "express";

import {
  getMateriByAlatMusik,
  getAlatMusikList,
  getMateriByID,
  createMateri,
  editMateriByID,
  deleteMateriByID,
  updateRating,
  getRatingList,
  addPengunjung,
} from "../components/materi.js";

const router = express.Router();

router.get("/", getMateriByAlatMusik);
router.get("/alatmusik", getAlatMusikList);
router.get("/user", getMateriByID);
router.post("/", createMateri);
router.patch("/", editMateriByID);
router.delete("/", deleteMateriByID);
router.get("/rating", getRatingList);
router.patch("/rating", updateRating);
router.get("/pengunjung", addPengunjung);

export default router;