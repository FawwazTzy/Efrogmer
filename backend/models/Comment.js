// models/Comment.js
import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  name: { type: String, default: "Guest" },
  text: { type: String, required: true },
  likes: { type: Number, default: 0 }
}, { timestamps: true });

export default mongoose.model("Comment", commentSchema);
