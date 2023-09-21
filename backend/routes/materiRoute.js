import express from "express";

import {
  getMateri,
  setMateri,
  getMateriList,
} from "../components/materi.js";

const router = express.Router();

router.get("/", getMateri);
router.get("/list", getMateriList);
router.get("/set", setMateri);

export default router;