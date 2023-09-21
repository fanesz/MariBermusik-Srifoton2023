import express from "express";

import {
  setLogin,
  setLogout,
  isLogin
} from "../components/login.js";

const router = express.Router();

router.post("/", setLogin);
router.post("/out", setLogout);
router.post("/islogin", isLogin);

export default router;