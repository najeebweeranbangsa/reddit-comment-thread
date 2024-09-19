import React, { useState } from "react";
import CommentForm from "./CommentForm";
import VoteButtons from "./VoteButtons";

function Comment({ comment, dispatch }) {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [hasUpvoted, setHasUpvoted] = useState(false); 
  const [hasDownvoted, setHasDownvoted] = useState(false); 
  const [voteCount, setVoteCount] = useState(comment.votes); 


  const addReply = (text) => {
    const reply = { id: Date.now(), text, votes: 0, replies: [] };
    dispatch({ type: "ADD_REPLY", payload: { parentId: comment.id, reply } });
    setShowReplyForm(false);
  };

  const handleUpvote = () => {
    if (!hasUpvoted) {
      setVoteCount(voteCount + 1); 
      setHasUpvoted(true);
      if (hasDownvoted) {
        setHasDownvoted(false);
        setVoteCount(voteCount + 1); 
      }
    }
  };


  const handleDownvote = () => {
    if (!hasDownvoted) {
      setVoteCount(voteCount - 1); 
      setHasDownvoted(true);
      if (hasUpvoted) {
        setHasUpvoted(false);
        setVoteCount(voteCount - 1); 
      }
    }
  };

  return (
    <div className="comment">
      <p>{comment.text}</p>
      <VoteButtons
        votes={voteCount}
        onUpvote={handleUpvote}
        onDownvote={handleDownvote}
        hasUpvoted={hasUpvoted}
        hasDownvoted={hasDownvoted}
      />
      <button onClick={() => setShowReplyForm(!showReplyForm)}>Reply</button>
      {showReplyForm && <CommentForm onSubmit={addReply} />}
      {  }
      {comment.replies.length > 0 && (
        <div className="replies">
          {comment.replies.map((reply) => (
            <Comment key={reply.id} comment={reply} dispatch={dispatch} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Comment;
