// src/api/comment.js
const API_BASE = import.meta.env.VITE_API_BASE;

export async function fetchComments(page = 1, limit = 5) {
  const res = await fetch(`${API_BASE}/comments?page=${page}&limit=${limit}`);
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
}

export async function postComment({ name, text }) {
  const res = await fetch(`${API_BASE}/comments`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, text })
  });
  if (!res.ok) throw new Error("Failed to post comment");
  return res.json();
}

export async function likeComment(id) {
  const res = await fetch(`${API_BASE}/comments/${id}/like`, {
    method: "PATCH"
  });
  if (!res.ok) throw new Error("Failed to like");
  return res.json();
}
