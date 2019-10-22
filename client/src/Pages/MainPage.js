import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/styles'
import { IntroText } from '../components/IntroText';
import Grid from '@material-ui/core/Grid';
import GenerateButton from './GenerateButton'
// import Dialog from '@material-ui/core/Dialog';
import axios from 'axios';
import Phone from '../ClientEngine/RequestEngine'
import Clientgame from '../ClientEngine/Clientgame'
import { styles } from '../assets/PageStyles/MainPage.theme'

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: 2,
      currentStages: 7,
      secretWord: '',
      currentWordView: [],
      hasGameStarted: false,
      gameType: '',
      loggedIn: false,
    }
  }
  stateChanger = state => {
    this.setState(state);
  }
  handleSave = (state) => {
    const { difficulty, gameType } = state;
    let Game = null;
    if (!this.state.loggedIn) {
      Game = new Clientgame(Number(state.difficulty), null, this.stateChanger);
    } else {
      // TODO when you actuall have a loggedIn logic.
      return null
    }
    let pSecretWord = Game.getWord(6)
    pSecretWord
      .then((secretWord) => {
        let gameState = {
          difficulty,
          gameType,
          hasGameStarted: true,
          secretWord,
          currentWordView: secretWord.split(''),
        }

        this.setState(gameState)
      });





  }

  reset = () => {
    this.setState({
      hasGameStarted: false
    })
  }

  render() {
    const { classes } = this.props

    let greet = <IntroText />
    let greetButton = <GenerateButton handleSave={this.handleSave} />
    let reset = <Button onClick={this.reset}>Reset</Button>
    return (
      <div>

        <Container className={classes.container} >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            {this.state.hasGameStarted ? reset : null}

            {/* <Button className={classes.button}> Generate</Button> */}
            {!this.state.hasGameStarted ? greet : null}
            {!this.state.hasGameStarted ? greetButton : null}
          </Grid>

        </Container>
      </div>);


  }
}

export default withStyles(styles)(MainPage);