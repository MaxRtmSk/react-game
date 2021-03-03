import React from 'react';
import './App.css';
import { Game } from './components/Game';

// import './components/Card.scss'
import './components/Card.scss'
import './components/Board.scss'

function App() {
  return (
    <div className="App">
      <Game string={'String'}/>
    </div>
  );
}

export default App;
