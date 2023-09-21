import express from "express";

import {
  getUser,
  createUser,
  getUserByLoginID,
  updateUsername,
} from "../components/user.js";

const router = express.Router();

router.get("/", getUser);
router.post("/", getUserByLoginID);
router.post("/create", createUser);
router.post("/update", updateUsername);

export default router;