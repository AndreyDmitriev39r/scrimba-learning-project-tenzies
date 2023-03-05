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
      .map(item => getRandomNumber(range));
  }

  // state

  const [dice, setDice] = useState(() => getDicevalues(10, 6))

  // rendering
  
  let diceElements = dice.map((value, index) => <Die value={value} key={index} />);
  
  return (
   <main>
    <div className="die-container">
      {diceElements}
    </div>
    <button className="reroll">Roll</button>
   </main>
  );
}

export default App;
