import express from "express";

import {
  getUser,
  createUser,
  updateUsername
} from "../components/user.js";

const router = express.Router();

router.get("/", getUser);
router.post("/create", createUser);
router.post("/update", updateUsername);

export default router;