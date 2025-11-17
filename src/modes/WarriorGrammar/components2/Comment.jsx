import React, { useEffect, useState } from "react";
import { fetchComments, postComment, likeComment } from "../../../api/comment.js";
import { io } from "socket.io-client";
import { StyledWrapper } from "./CommentStyles";

const socket = io(import.meta.env.VITE_API_BASE || "http://localhost:5000");

const Comment = () => {
  const [comments, setComments] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [nameInput, setNameInput] = useState("");
  const [newComment, setNewComment] = useState("");
  const limit = 5;

  const loadPage = async (p = 1) => {
    try {
      const data = await fetchComments(p, limit);
      setComments(data.comments);
      setPage(data.page);
      setTotalPages(data.totalPages);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadPage(1);

    socket.on("new_comment", (c) => {
      if (page === 1) setComments((prev) => [c, ...prev.slice(0, limit - 1)]);
    });

    socket.on("like_updated", ({ id, likes }) => {
      setComments((prev) =>
        prev.map((c) => (c._id === id ? { ...c, likes } : c))
      );
    });

    return () => {
      socket.off("new_comment");
      socket.off("like_updated");
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePost = async () => {
    if (!newComment.trim()) return;
    try {
      await postComment({ name: nameInput || "Guest", text: newComment });
      setNewComment("");
      setNameInput("");
      loadPage(1);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLike = async (id) => {
    try {
      await likeComment(id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <StyledWrapper>
      <div className="card">
        <span className="title">Comments your score and give feedback!</span>

        <div className="comment-scroll">
          {comments.map((c) => (
            <div className="comments" key={c._id}>
              <div className="comment-react">
                <button onClick={() => handleLike(c._id)}>❤️</button>
                <hr />
                <span>{c.likes}</span>
              </div>

              <div className="comment-container">
                <div className="user">
                  <div className="user-pic">
                    <span>👤</span>
                  </div>
                  <div className="user-info">
                    <span>{c.name}</span>
                    <p>{new Date(c.createdAt).toLocaleString()}</p>
                  </div>
                </div>
                <p className="comment-content">{c.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button key={n} onClick={() => loadPage(n)} disabled={n === page}>
              {n}
            </button>
          ))}
        </div>

        <div className="text-box">
          <div className="box-container">
            <input
              className="name-input"
              placeholder="Your name..."
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />
            <textarea
              placeholder="Write a comment..."
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
            />
            <div className="formatting">
              <button className="send" onClick={handlePost}>
                ➤
              </button>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

export default Comment;
