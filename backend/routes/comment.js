// routes/comment.js
import express from "express";
import Comment from "../models/Comment.js";

const router = express.Router();

// GET comments with pagination
router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;
  const skip = (page - 1) * limit;

  const total = await Comment.countDocuments();
  const comments = await Comment.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
  res.json({ comments, page, totalPages: Math.ceil(total / limit) });
});

// POST comment
router.post("/", async (req, res) => {
  const { name, text } = req.body;
  const newComment = new Comment({ name, text });
  await newComment.save();

  // emit via socket
  const io = req.app.get("io");
  io.emit("new_comment", newComment);

  res.status(201).json(newComment);
});

// PATCH like
router.patch("/:id/like", async (req, res) => {
  const comment = await Comment.findById(req.params.id);
  if (!comment) return res.status(404).json({ message: "Comment not found" });
  comment.likes += 1;
  await comment.save();

  const io = req.app.get("io");
  io.emit("like_updated", { id: comment._id, likes: comment.likes });

  res.json({ id: comment._id, likes: comment.likes });
});

export default router;
