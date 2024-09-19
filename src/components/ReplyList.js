import React from 'react';
import Comment from './Comment';

const ReplyList = ({ replies = [], dispatch }) => (
  <div className="reply-list">
    {replies.map((reply) => (
      <Comment key={reply.id} comment={reply} dispatch={dispatch} />
    ))}
  </div>
);

export default ReplyList;
