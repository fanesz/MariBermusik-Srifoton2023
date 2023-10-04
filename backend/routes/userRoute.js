import express from "express";

import {
  getUser,
  getUserByParam,
  createUser,
  updateUser,
} from "../components/user.js";

const router = express.Router();

router.get("/", getUser);
router.get("/id", getUserByParam);
router.post("/", createUser);
router.patch("/", updateUser);

export default router;