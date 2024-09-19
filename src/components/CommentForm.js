
import React, { useState } from 'react';

const CommentForm = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText('');
    } 
  };

  return (
    <form onSubmit={handleSubmit}>

    <textarea rows="5" cols = "20" placeholder="Add a comment" value={text} onChange={(e) => setText(e.target.value)}
        ></textarea>


      {/* <input
        type="textarea"
        rows= "4"
        cols="3"
        value={text}
        onChange={(e) => setText(e.target.value)}
   
      /> */}
   
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
