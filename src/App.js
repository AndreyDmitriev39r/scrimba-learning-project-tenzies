import { nanoid } from "nanoid";
import Confetti from "react-confetti";

import { useState, useEffect } from "react";

import Header from "./components/Header";
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

  // event handlers

  const handleRollClick = () => {    
    if (!tenzies) {
      const nextDice = dice
      .map(die => die.isHeld ? die : {...die, value: getRandomNumber(6)});
      setDice(() => nextDice);
    } else {
      setDice(getDicevalues(10, 6));
      setTenzies(false);
    }
  }

  const holdDice = (event, id) => {
    const nextDice = dice
      .map(die => die.id === id ? {...die, isHeld: !die.isHeld} : die);
    setDice(() => nextDice);
  }

  // state

  const [dice, setDice] = useState(() => getDicevalues(10, 6));

  const [tenzies, setTenzies] = useState(() => false);

  // effect

  useEffect(() => {    
    if (dice.every(die => die.isHeld)) {
      if (dice.reduce((acc, die) => acc + die.value, 0) === dice[0].value * dice.length) {
        setTenzies(true);
      };
    }
  }, [dice])

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
    {tenzies && <Confetti />}
    <Header />
    <div className="die-container">
      {diceElements}
    </div>
    <button
      className="reroll"
      onClick={handleRollClick}>
        {tenzies ? "New Game" : "Roll"}
    </button>
   </main>
  );
}

export default App;
