import React from "react";
import "./App.scss";
import { Game } from "./components/Game";

// import './components/Card.scss'
import "./components/Card.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      <Header />
      <Game string={"String"} />
      <Footer />
    </div>
  );
}

export default App;
