import React, { useState } from "react";
import { StyledWrapper } from "./CommentStyles";

const Comment = () => {
  const [comments, setComments] = useState([
    {
    id: 1,
    name: "Fawwaz (Developer) | Has been pinned📌",
    time: "Sunday, November 10th 2025 at 8:43 (Published)",
    text: `IMPROVE YOUR GRAMMAR SKILLS AND ENJOY THIS EDUCATIVE GAME THROUGHT WEBSITE THAT I MADE, GUYS🔥`,
    likes: 41,
    },
    {
      id: 2,
      name: "Timothy Ronald",
      time: "Today at 12:56",
      text: "Karya anak Gen z bukan kaleng-kaleng, Semangat terus kembangkan Product RnD mu buat ganti skripsi bro!",
      likes: 0,
    },
    {
      id: 3,
      name: "Yassine Zanina",
      time: "Wednesday, November 12th 2025 at 22:45",
      text: "I've been using this product for a few days now and I'm really impressed!",
      likes: 0,
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [nameInput, setNameInput] = useState("");

  const [page, setPage] = useState(1);
  const commentsPerPage = 5;

  const lastIndex = page * commentsPerPage;
  const firstIndex = lastIndex - commentsPerPage;
  const currentComments = comments.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(comments.length / commentsPerPage);

  // === Like ===
  const handleLike = (id) => {
    setComments((prev) =>
      prev.map((c) =>
        c.id === id ? { ...c, likes: c.likes + 1 } : c
      )
    );
  };

  // === Format Waktu Realtime ===
const formatTime = () => {
  const now = new Date();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const dayName = days[now.getDay()];

  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;

  return `${dayName}, ${now.getDate()} ${now.toLocaleString("en-US", {
    month: "short",
  })} ${now.getFullYear()} at ${hours}:${minutes}`;
};

// === Post Comment ===
const handlePost = () => {
  if (!newComment.trim()) return;

  const newData = {
    id: comments.length + 1,
    name: nameInput.trim() || "Guest",
    time: formatTime(),   // ⬅ realtime
    text: newComment,
    likes: 0,
  };

  setComments([newData, ...comments]);
  setNameInput("");
  setNewComment("");
  setPage(1);
};

  return (
    <StyledWrapper>
      <div className="card">
        <span className="title">Comments your score and give a feedback! </span>

        <div className="comment-scroll">
          {currentComments.map((c) => (
            <div className="comments" key={c.id}>
              <div className="comment-react">
                <button onClick={() => handleLike(c.id)}>
                  ❤️
                </button>
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
                    <p>{c.time}</p>
                  </div>
                </div>

                <p className="comment-content">{c.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              className={page === n ? "active-page" : ""}
              onClick={() => setPage(n)}
            >
              {n}
            </button>
          ))}
        </div>

        {/* Input + Comment */}
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
