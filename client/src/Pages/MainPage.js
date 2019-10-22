import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/styles'
import { IntroText } from '../components/IntroText';
import Grid from '@material-ui/core/Grid';
import GenerateButton from './GenerateButton'
// import Dialog from '@material-ui/core/Dialog';
// import axios from 'axios';
// import Phone from '../ClientEngine/RequestEngine'
import Clientgame from '../ClientEngine/Clientgame'
import { styles } from '../assets/PageStyles/MainPage.theme'

import Player from '../ClientEngine/Player'
import { errorHandler } from '../ClientEngine/ClientLibrary/errorHandler';
class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 35,
      difficulty: 2,
      currentStages: 7,
      secretWord: '',
      currentWordView: [],
      hasGameStarted: false,
      gameType: '',
      loggedIn: false,
      PlayerInstance: null,
      GameInstance: null
    }
  }
  componentDidMount() {
    if (!this.state.PlayerInstance) {
      this.setState({
        PlayerInstance: new Player({ name: 'Mario', GameInstance: null })
      });
    } else {
      console.log('you atually have a player?');
      if (this.state.GameInstance) {
        Player.setGameInstance(this.state.Game);
      }
    }
  }
  componentDidUpdate() {
    console.log('updating');
  }
  stateChanger = state => {
    this.setState(state);
  }
  handleSave = (state) => {
    let Game = null;
    let PlayerInstance = null;
    //initialize Game from frontend.
    if (!this.state.loggedIn || !this.state.PlayerInstance) {
      const gameObject = { difficulty: Number(state.difficulty), gameType: state.gameType }
      Game = new Clientgame(gameObject, null, this.stateChanger);
      PlayerInstance = new Player({ name: 'mario', GameInstance: Game });
      console.log('did i reach here');
      state.PlayerInstance = PlayerInstance;
      window.Player = PlayerInstance;
    } else {
      // TODO when you actuall have a loggedIn logic.
      errorHandler(null, "you were logged in? you shouldn't be");

    }
    let pSecretWord = Game.getWord(state)
    pSecretWord
      .then((secretWord) => {
        console.log(secretWord)
        let gameState = {
          difficulty: state.difficulty,
          gameType: state.gameType,
          hasGameStarted: true,
          secretWord,
          currentWordView: secretWord.split(''),
          GameInstance: Game
        }
        gameState.PlayerInstance = PlayerInstance;
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