import React, { useReducer } from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm';

const initialComments = [];

function commentReducer(state, action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state, { ...action.payload, replies: [] }];
    case 'ADD_REPLY':
      return state.map(comment =>
        comment.id === action.payload.commentId
          ? { ...comment, replies: [...comment.replies, action.payload.reply] }
          : comment
      );
    case 'UPVOTE':
      return state.map(comment =>
        comment.id === action.payload.id ? { ...comment, votes: comment.votes + 1 } : comment
      );
    case 'DOWNVOTE':
      return state.map(comment =>
        comment.id === action.payload.id ? { ...comment, votes: comment.votes - 1 } : comment
      );
    default:
      return state;
  }
}

const CommentThread = () => {
  const [comments, dispatch] = useReducer(commentReducer, initialComments);

  const addComment = (text) => {
    dispatch({ type: 'ADD_COMMENT', payload: { id: Date.now(), text, votes: 0 } });
  };

  return (
    <div>
      <CommentForm onSubmit={addComment} />
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment} dispatch={dispatch} />
      ))}
    </div>
  );
};

export default CommentThread;