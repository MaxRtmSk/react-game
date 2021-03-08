import React from 'react';
import './App.css';
import { Game } from './components/Game';

// import './components/Card.scss'
import './components/Card.scss'
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      <Game string={'String'}/>
      <Footer/>
    </div>
  );
}

export default App;
