import ScoreDisplay from './ScoreDisplay';
import React from 'react';
import { Container } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import BadGuessesList from './BadGuessesList'

const ScoreBoard = (props) => {
  return (
    <Container>
      <Grid>
        <ScoreDisplay currentStages={props.currentStages}> </ScoreDisplay >
        <BadGuessesList badGuesses={props.badGuesses}></BadGuessesList>
      </Grid>
    </Container>
  )
}
export default ScoreBoard;