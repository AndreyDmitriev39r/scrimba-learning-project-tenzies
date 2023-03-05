function Die({value, isHeld}) {
  return (
   <button
    className={`die${isHeld ? " die--held" : " die--not-held"}`}
   >{value}</button>
  );
}

export default Die;