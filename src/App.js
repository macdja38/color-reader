import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [text, setText] = useState("This app is an experiment to see if assigning each letter a unique colour can make reading easier. Feel free to use your web inspector to change the colours of the letters.");

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
