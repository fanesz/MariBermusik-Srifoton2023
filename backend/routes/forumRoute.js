import express from "express";

import {
  getPost,
  getPostByOwner,
  createPost,
  editPost,
  deletePost,
} from "../components/forum.js";

const router = express.Router();

router.get("/", getPost);
router.post("/", getPostByOwner);
router.post("/create", createPost);
router.post("/edit", editPost);
router.post("/delete", deletePost);


export default router;