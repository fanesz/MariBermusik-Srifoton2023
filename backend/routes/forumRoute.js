import express from "express";

import {
  getPost,
  getPostByOwner,
  createPost,
  editPost,
  deletePost,
  updateVote,
} from "../components/forum.js";

const router = express.Router();

router.get("/", getPost);
router.get("/", getPostByOwner);
router.post("/", createPost);
router.patch("/", editPost);
router.delete("/", deletePost);
router.patch("/vote", updateVote);


export default router;