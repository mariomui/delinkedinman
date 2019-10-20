import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles((theme) => {
  return {
    introtext: {
      color: 'black',
      fontSize: 40,
      width: 394 + 'px',
      height: 142 + 'px',
      textAlign: 'center',
      marginBottom: 74 + 'px'
    }
  };
});
export const IntroText = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <p className={classes.introtext}>
        Guess the correct word completely and win a prize!
    </p>
    </Fragment >
  )
}