import React from "react";

function VoteButtons({ votes, onUpvote, onDownvote, hasUpvoted, hasDownvoted }) {
  return (
    <div className="vote-buttons">
      <button onClick={onUpvote} disabled={hasUpvoted}>
        Upvote
      </button>
      <span>{votes}</span> {}
      <button onClick={onDownvote} disabled={hasDownvoted}>
        Downvote
      </button>
    </div>
  );
}

export default VoteButtons;
