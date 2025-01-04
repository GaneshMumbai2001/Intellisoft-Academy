import React, { useState } from "react";
import "./ProgressBar.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(70); // Example progress value
  const [comment, setComment] = useState(""); // State for comment input

  const handlePostComment = () => {
    if (comment) {
      alert(`Comment Posted: ${comment}`);
      setComment(""); // Clear comment input after posting
    } else {
      alert("Please enter a comment before posting.");
    }
  };

  return (
    <div className="progress-container">
      {/* Progress Bar */}
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}>
          <span className="progress-label">{progress}%</span>
        </div>
      </div>
      <div className="progress-text">
        {progress}% completed
      </div>

      {/* Discussion Form */}
      <div className="discussion-forum">
        <textarea
          className="forum-input"
          placeholder="Post a comment or question..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button className="post-button" onClick={handlePostComment}>
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default ProgressBar;
