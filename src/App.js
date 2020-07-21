import React, { useState } from 'react';
import './App.css';
import ChoiceCard from './components/ChoiceCard.js'

const choices = {
  rock:
    "https://opengameart.org/sites/default/files/forum-attachments/very%20simple%20rock_0.png",
  paper: "http://pngimagesfree.com/Paper/Thumb/blank-note-paper-free-clipa.png",
  scissors: "http://www.pngmart.com/files/1/Scissors-PNG-Pic.png"
};


function App() {

  const [prompt, setGamePrompt] = useState("Start")

  return (
    <div className="App">
      <div className="container">
        <div className="row mb-3">
          <div className="col-md-8 themed-grid-col">
            <ChoiceCard title="Computer" />
            <h1>{prompt}</h1>
            <ChoiceCard title="You" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// winner={true} imgURL={choices.paper}
// winner={false} imgURL={choices.rock} 