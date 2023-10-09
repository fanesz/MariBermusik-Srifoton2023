import express from "express";

import {
  getPost,
  getPostByUUID,
  createPost,
  editPost,
  deletePost,
  updateVote,
  addComment,
} from "../components/forum.js";

const router = express.Router();

router.get("/", getPost);
router.get("/id", getPostByUUID);
router.post("/", createPost);
router.patch("/", editPost);
router.delete("/", deletePost);
router.patch("/vote", updateVote);
router.post("/comment", addComment);

export default router;