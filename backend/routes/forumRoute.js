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
router.get("/", getPostByOwner);
router.post("/", createPost);
router.patch("/", editPost);
router.delete("/", deletePost);


export default router;