import React from 'react';
import CommentThread from './components/CommentThread';
import './styles/main.scss';

function App() {
  return (
    <div className="App">
      <h1>Reddit-like comment thread component</h1>
      <CommentThread />
    </div>
  );
}

export default App;