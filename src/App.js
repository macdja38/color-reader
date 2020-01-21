import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState("Edit <code>src/App.js</code> and save to reload.");

  const spannyText = text.split("").map((letter, i) => <span key={letter + i} className={letter}>
    {letter}
  </span>);

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" value={text} onChange={e => setText(e.target.value)} />
        <p>
          {spannyText}
        </p>
      </header>
    </div>
  );
}

export default App;
