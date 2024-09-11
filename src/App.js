import React from 'react';
import CommentThread from './components/CommentThread';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <h1>Reddit-like Comment Thread</h1>
      <CommentThread />
    </div>
  );
}

export default App;