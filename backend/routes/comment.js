import express from "express";
import Comment from "../models/comment.js"

const router = express.Router();

// GET comments (with pagination)
router.get("/", async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 5;

  try {
    const total = await Comment.countDocuments();
    const comments = await Comment.find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      comments,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST comment
router.post("/", async (req, res) => {
  try {
    const comment = new Comment(req.body);
    const saved = await comment.save();

    // realtime via socket.io
    req.io.emit("new_comment", saved);

    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// PATCH like
router.patch("/:id/like", async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ error: "Comment not found" });

    comment.likes += 1;
    await comment.save();

    req.io.emit("like_updated", { id: comment._id, likes: comment.likes });
    res.json(comment);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
