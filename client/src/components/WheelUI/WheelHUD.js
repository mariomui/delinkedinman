import React, { useEffect, useState } from 'react';
import ScoreDisplay from './ScoreDisplay';
import DataEntry from './DataEntry';
import DisplayGuess from './DisplayGuess';

const WheelHUD = (props) => {
  useEffect(() => {
    console.log('did i get here?')
    document.getElementById('secretForm').focus();
  }, [])
  const [massiveRefs, recordMassiveRefs] = useState({});

  const handleKeyboardRefs = (refs) => {
    Object.assign(massiveRefs, refs);
    recordMassiveRefs(massiveRefs);
  }
  const record = (e) => {
    e.preventDefault();
    console.log(e.target);
    let value = e.target.value.slice(-1);
    // value = value || e.value || e.currentTarget && e.currentTarget.value
    let refo = window.seemyrefs[value];
    if (refo) refo.style.color = "white"
    setTimeout(() => {
      refo.style.color = "black";
    }, 500)

  }
  return (<div>
    <DisplayGuess guess={props.guess} />
    <input type="value"
      id='secretForm'
      style={{ position: 'absolute', top: '-1000px', zIndex: -1000 }}
      onChange={record}></input>

    <ScoreDisplay></ScoreDisplay>

    <DataEntry
      handleKeyboardRefs={handleKeyboardRefs}
      handleGuess={props.handleGuess}>
    </DataEntry>
    <ScoreDisplay></ScoreDisplay>
  </div >);
}

export default WheelHUD