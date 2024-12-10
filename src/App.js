import logo from "./logo.svg";
import "./App.css";
import { useState, useRef } from "react";
import Game from "./components/game";

function App() {
  return (
    <div className="App">
      <Game></Game>
    </div>
  );
}

export default App;
