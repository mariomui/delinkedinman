import React, { useState, useEffect } from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/styles'
import { createKeyboardUIObject } from '../../assets/DataEntry.theme'
// import { Grid } from '@material-ui/core';




let initialCss = {
  buttonGroup: {
    display: 'grid',
    gridTemplateColumns: 'repeat(9 1fr)',
    gridTemplateRows: '3',
  }
}
const mapping = createKeyboardUIObject(initialCss, {
  color: 'black',
  overflow: 'hidden', /* Ensures the content is not revealed until the animation */
  borderRight: '.15em solid orange', /* The typwriter cursor */
  whiteSpace: 'nowrap', /* Keeps the content on a single line */
  margin: `0 auto`, /* Gives that scrolling effect as the typing happens */
  letterSpacing: '.15em', /* Adjust as needed */
  animation: `typing 3.5s steps(40, end)`,
})
const fn = (theme) => (initialCss)
const useStyles = makeStyles(fn);

const refs = {};
window.seemyrefs = refs;

const DataEntry = (props) => {
  const special = ['Space', 'Enter', 'Backspace']
  // let { handleClick } = props;
  const [word, enterData] = useState('');

  let sideEffect = special.length;

  const clearWord = () => {
    enterData('');
    props.handleGuess('');
  }
  const pressEnter = (e) => {
    if (e.target.textContent === "Backspace") {
      props.handleGuess('');
      enterData('');
    } else if (e.target.textContent === "Enter") {
      word.length && props.submitFinalGuess(word);
    }
    clearWord();
  }

  const handleKeyPress = (e, value) => {
    let newWord = word;
    let newChar = null;
    if (e !== null) {

      newChar = e && e.currentTarget && e.currentTarget.value
      newChar = newChar ? newChar : e.value;
      enterData(newWord += newChar);
    } else {
      enterData(newWord += value)
    }
    props.handleGuess(newWord);

  }
  useEffect(() => {

    handleKeyPress(null, props.crazyKeyEntry);
  }, [props.crazyKeyEntry])

  const appendTo = (jsx, sideEffect) => {
    let component = null;
    if (special[sideEffect] === 'Enter') {
      component = () => (<Button onClick={pressEnter}>{special[sideEffect]}</Button>)
    } else if (special[sideEffect] === 'Space') {
      component = () => (<Button onClick={pressEnter}>{special[sideEffect]}</Button>)
    } else if (special[sideEffect] === "Backspace") {
      component = () => <Button onClick={pressEnter}>{special[sideEffect]}</Button>
    }

    return (
      <div>
        {jsx}
        {component()}
      </div>)
  }

  const createAndLogRef = (e) => {
    if (e && e.value) {
      refs[e.value] = e;
    } else {
      console.log('Loggin refs. should be 26 for each alphabet')
    }
  }


  const classes = useStyles();
  // let oneLoad = window.seemyrefs ? createAndLogRef : null
  return (
    <ButtonGroup className={classes.buttonGroup}>
      {
        mapping.map((row) => {
          return appendTo(
            row.map((item) => {
              return (
                <Button value={item}
                  ref={createAndLogRef}
                  className={classes[`key${item}`]}
                  onClick={handleKeyPress} >
                  {item}
                </Button>
              );
            }), --sideEffect)
        })
      }
    </ButtonGroup >)
}
export default DataEntry