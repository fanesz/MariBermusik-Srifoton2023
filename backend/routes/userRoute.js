import express from "express";

import {
  getUser,
  createUser,
  getUserByLoginID,
  updateUser,
} from "../components/user.js";

const router = express.Router();

router.get("/", getUser);
router.get("/id", getUserByLoginID);
router.post("/", createUser);
router.patch("/", updateUser);

export default router;