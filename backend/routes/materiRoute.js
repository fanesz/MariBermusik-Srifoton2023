import express from "express";

import {
  getMateri,
  setMateri
} from "../components/materi.js";

const router = express.Router();

router.get("/", getMateri);
router.get("/set", setMateri);

export default router;