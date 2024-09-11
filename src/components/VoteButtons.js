import React from 'react';

const VoteButtons = ({ onUpvote, onDownvote, votes }) => (
  <div className="vote-buttons">
    <button onClick={onUpvote}>Upvote</button>
    <button onClick={onDownvote}>Downvote</button>
    <span>Votes: {votes}</span>
  </div>
);

export default VoteButtons;