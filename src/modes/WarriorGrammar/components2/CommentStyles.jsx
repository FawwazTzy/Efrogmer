// CommentStyles.jsx
import styled from "styled-components";

export const StyledWrapper = styled.div`
  .card {
    width: 1200;
    max-width: 100%;
    height: fit-content;
    background-color: white;
    box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01),
      0px 105px 63px rgba(0, 0, 0, 0.05),
      0px 47px 47px rgba(0, 0, 0, 0.09),
      0px 12px 26px rgba(0, 0, 0, 0.1),
      0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 17px 17px 27px 27px;
  }

  .title {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    border-bottom: 1px solid #f1f1f1;
    font-weight: 700;
    font-size: 13px;
    color: #47484b;
  }

  .comments {
    display: grid;
    grid-template-columns: 35px 1fr;
    gap: 20px;
    padding: 20px;
  }

  .comment-react {
    width: 35px;
    display: grid;
    background-color: #f1f1f1;
    border-radius: 5px;
  }

  .comment-react button {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border: none;
  }

  .comment-react hr {
    width: 80%;
    height: 1px;
    background-color: #dfe1e6;
    margin: auto;
    border: 0;
  }

  .comment-react span {
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    color: #707277;
  }

  /* ✓ Scroll comment list */
  .comment-scroll {
    max-height: 380px;
    overflow-y: auto;
    padding-right: 8px;
  }

  /* Comment bubble */
  .comment-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .user {
    display: grid;
    grid-template-columns: 40px 1fr;
    gap: 10px;
  }

  .comment-content {
    font-size: 13px;
    font-weight: 600;
    color: #5f6064;
    background: #f7f7f7;
    padding: 15px;
    border-radius: 10px;
    line-height: 18px;
  }

  /* Input Name */
  .name-input {
    width: 100%;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #bcbcbc;
    margin-bottom: 10px;
    font-size: 14px;
  }

  /* Textarea diperpanjang */
  textarea {
    min-height: 120px;
    width: 100%;
    resize: none;
    border: none;
    padding: 12px;
    border-radius: 8px;
    outline: none;
  }

  .text-box {
    background: #f1f1f1;
    padding: 10px;
  }

  .send {
    background: #0a84ff;
    border-radius: 50%;
  }

  /* Pagination */
  .pagination {
    display: flex;
    justify-content: center;
    gap: 8px;
    padding: 12px;
  }

  .pagination button {
    padding: 5px 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }

  .active-page {
    background: #0a84ff;
    color: white;
  }
`;
