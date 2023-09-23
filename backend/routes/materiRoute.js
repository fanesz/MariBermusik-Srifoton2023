import express from "express";

import {
  getMateriByAlatMusik,
  getAlatMusikList,
  createMateri,
  editMateriByID,
  deleteMateriByID,
} from "../components/materi.js";

const router = express.Router();

router.get("/", getMateriByAlatMusik);
router.get("/alatmusik", getAlatMusikList);
router.post("/", createMateri);
router.patch("/", editMateriByID);
router.delete("/", deleteMateriByID);

export default router;