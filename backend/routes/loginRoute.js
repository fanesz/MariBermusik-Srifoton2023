import express from "express";

import {
  getLoginUser,
  setLogin,
  setLogout,
  isLogin
} from "../components/login.js";

const router = express.Router();

router.get("/", getLoginUser);
router.post("/", setLogin);
router.delete("/", setLogout);
router.get("/islogin", isLogin);

export default router;