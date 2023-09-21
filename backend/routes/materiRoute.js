import express from "express";

import {
  getMateriByAlatMusik,
  getAlatMusikList,
  createMateri,
  updateMateriByID,
  deleteMateriByID,
} from "../components/materi.js";

const router = express.Router();

router.get("/", getMateriByAlatMusik);
router.get("/list", getAlatMusikList);
router.post("/create", createMateri);
router.post("/update", updateMateriByID);
router.post("/delete", deleteMateriByID);

export default router;