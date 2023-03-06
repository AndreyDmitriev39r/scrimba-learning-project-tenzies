import { nanoid } from "nanoid";

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
          id: nanoid(),
        };
      });
  }

  const holdDice = (event, id) => {
    const nextDice = dice
      .map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die)   
    setDice(() => nextDice);
  }

  // event handlers

  const handleRollClick = () => {
    setDice(getDicevalues(10, 6));
  }

  // state

  const [dice, setDice] = useState(() => getDicevalues(10, 6))

  // rendering
  
  let diceElements = dice.map((dice) =>
  <Die
    value={dice.value}
    isHeld={dice.isHeld}
    key={dice.id}
    id={dice.id}
    holdDice={holdDice}
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
