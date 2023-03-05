import { useState } from "react";

import Die from "./components/Die";

function App() {

  // helper functions

  const getRandomNumber = (range) => {
    return Math.ceil(Math.random() * range);
  }

  const getDicevalues = (diceNumber, range) => {
    return Array(diceNumber)
      .fill(null)
      .map((item) => {
        return {
          value: getRandomNumber(range),
          isHeld: false,
        };
      });
  }

  // event handlers

  const handleRollClick = () => {
    setDice(getDicevalues(10, 6));
  }

  // state

  const [dice, setDice] = useState(() => getDicevalues(10, 6))

  // rendering
  
  let diceElements = dice.map((dice, index) =>
  <Die
    value={dice.value}
    isHeld={dice.isHeld}
    key={index}
  />
  );
  
  return (
   <main>
    <div className="die-container">
      {diceElements}
    </div>
    <button
      className="reroll"
      onClick={handleRollClick}>
        Roll
    </button>
   </main>
  );
}

export default App;
