import React, { useState } from 'react'
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/styles'
import { createKeyboardUIObject } from '../../assets/DataEntry.theme'
// import { Grid } from '@material-ui/core';

const special = ['Space', 'Enter', 'Backspace']
const pressEnter = (e) => {
  console.log('hi');
}


let initialCss = {
  buttonGroup: {
    display: 'grid',
    gridTemplateColumns: 'repeat(9 1fr)',
    gridTemplateRows: '3',
  }
}
const outlineColor = '#000', sizepx = '1.3px';
const mapping = createKeyboardUIObject(initialCss, {
  color: '#F6F6F6',
  'textShadow':
    `-${sizepx} -${sizepx} 0 ${outlineColor},
    ${sizepx} -${sizepx} 0 ${outlineColor},
    -${sizepx} ${sizepx} 0 ${outlineColor},
    ${sizepx} ${sizepx} 0 ${outlineColor};`
})
const fn = (theme) => (initialCss)
const useStyles = makeStyles(fn);



const DataEntry = (props) => {
  let { handleClick } = props;
  const [word, enterData] = useState(null);

  let sideEffect = special.length;

  const appendTo = (jsx, sideEffect) => {
    return (
      <div>
        {jsx}
        {
          special[sideEffect] === 'Enter' ?
            <Button onClick={pressEnter}>{special[sideEffect]}</Button> :
            <Button>{special[sideEffect]}</Button>
        }
      </div>)
  }

  const classes = useStyles();
  return (
    <ButtonGroup className={classes.buttonGroup}>
      {
        mapping.map((row) => {
          return appendTo(
            row.map((item) => {
              return (
                <Button className={classes[`key${item}`]}
                  onClick={enterData}>{item}
                </Button>
              );
            }), --sideEffect)
        })
      }
    </ButtonGroup>)
}
export default DataEntry