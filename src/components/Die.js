function Die({value, isHeld, id, holdDice}) {
  return (
   <button
    className={`die${isHeld ? " die--held" : " die--not-held"}`}
    onClick={(event) => holdDice(event, id)}
   >{value}</button>
  );
}

export default Die;