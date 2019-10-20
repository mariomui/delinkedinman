import React from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/styles';


const difficulty = [
  {
    value: 2,
    label: 'Easy',
  },
  {
    value: 4,
    label: 'Medium',
  },
  {
    value: 6,
    label: 'Hard'
  },
  {
    value: 8,
    label: 'Very Hard',
  },
];

const styles = (theme) => ({
  difficultySlider: {
    height: '211.43px',
    width: '63.19px'

  },
  root: {
    height: 300 + 'px',
  },
})

const VerticalSlider = (props) => {
  const { classes, onChoose } = props;
  function valuetext(value) {
    return `${value}`;
  }
  return (

    <div className={classes.difficultySlider}>

      <Slider
        id='slider'
        name="targetInput"
        onChangeCommitted={onChoose}
        className={classes.root}
        orientation="vertical"
        getAriaValueText={valuetext}
        valueLabelDisplay="on"
        step={2}
        max={8}
        min={2}
        defaultValue={2}
        aria-labelledby="vertical-slider"
        marks={difficulty}
      />
    </div>
  );
}

export default withStyles(styles)(VerticalSlider);