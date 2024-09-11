import React from 'react';
import VoteButtons from './VoteButtons';
import CommentForm from './CommentForm';
import ReplyList from './ReplyList';

const Comment = ({ comment, dispatch }) => {
  const addReply = (text) => {
    dispatch({ type: 'ADD_REPLY', payload: { commentId: comment.id, reply: { id: Date.now(), text, votes: 0 } } });
  };

  return (
    <div className="comment">
      <div className="comment-text">{comment.text}</div>
      <VoteButtons
        onUpvote={() => dispatch({ type: 'UPVOTE', payload: { id: comment.id } })}
        onDownvote={() => dispatch({ type: 'DOWNVOTE', payload: { id: comment.id } })}
        votes={comment.votes}
      />
      <CommentForm onSubmit={addReply} />
      <ReplyList replies={comment.replies} dispatch={dispatch} />
    </div>
  );
};

export default Comment;
