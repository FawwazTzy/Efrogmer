import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  text: { type: String, required: true },
  likes: { type: Number, default: 0 },
}, { timestamps: true });

export default mongoose.model("Comment", CommentSchema);
