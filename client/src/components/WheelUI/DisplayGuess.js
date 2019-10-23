import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles'
import { Container } from '@material-ui/core';
import { relative } from 'upath';

const initalCss = {
  root: {
    revert: 'all',
    position: 'absolute',
    top: '9vh',
    left: '0px',
    paddingLeft: '20vw',
    fontSize: '2em',
    display: 'flex',
    alignItems: 'center',
    transition: '.2s'

  }
}

const themer = (theme) => (initalCss);
const useStyles = makeStyles(themer)
const DisplayGuess = (props) => {
  const { guess } = props;
  const classes = useStyles();
  const inline = {
    fontSize: '3em',
    letterSpacing: '1.1'
  }
  return (
    <Container maxWidth="md" className={classes.root} >
      <Typography style={inline} paragraph>
        {guess}
      </Typography>
    </Container>
  )
}

export default DisplayGuess;