import express from "express";

import {
  getUser,
} from "../components/user.js";

const router = express.Router();

router.get("/", getUser);

export default router;