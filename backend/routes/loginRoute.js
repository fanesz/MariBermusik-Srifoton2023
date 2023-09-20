import express from "express";

import {
  setLogin,
  isLogin
} from "../components/login.js";

const router = express.Router();

router.post("/", setLogin);
router.post("/isLogin", isLogin);

export default router;