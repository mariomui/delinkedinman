import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/styles'
import { IntroText } from '../components/IntroText';
import Grid from '@material-ui/core/Grid';
import GenerateButton from './GenerateButton'
import Board from '../components/WheelUI/Board'

import Clientgame from '../ClientEngine/Clientgame'
import { styles } from '../assets/PageStyles/MainPage.theme'

import Player from '../ClientEngine/Player'
import { errorHandler } from '../ClientEngine/ClientLibrary/errorHandler';
import { Redirect } from 'react-router-dom';
import WheelHUD from '../components/WheelUI/WheelHUD'

let startingState = {
  count: 35,
  difficulty: 2,
  currentStages: 6,
  secretWord: '',
  currentWordView: [],
  hasGameStarted: false,
  gameType: '',
  loggedIn: false,
  PlayerInstance: null,
  GameInstance: null,
  startingState: {
    count: 35,
    difficulty: 2,
    currentStages: 6,
    secretWord: '',
    currentWordView: [],
    hasGameStarted: false,
    gameType: '',
    loggedIn: false,
    PlayerInstance: null,
    GameInstance: null,
    badGuesses: []
  },
  guess: ''
}
class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 35,
      difficulty: 2,
      currentStages: 6,
      secretWord: '',
      currentWordView: [],
      hasGameStarted: false,
      gameType: '',
      loggedIn: false,
      PlayerInstance: null,
      GameInstance: null,
      startingState,
      guess: '',
      badGuesses: []

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
    this.setState(startingState);
  }

  //stores the current guess for save state;
  handleGuess = (guess) => {
    this.setState({ guess });
  }

  submitFinalGuess = (charOrWord) => {
    const self = this;
    let state = null;
    if (!self.state.PlayerInstance) return console.log('no player found');
    if (charOrWord.length === 1) {
      state = self.state.PlayerInstance.makeACharGuess(charOrWord);
    } else {
      state = !!self.state.PlayerInstance.makeAWordGuess(charOrWord);
    }
    //error if state = null;
    if (state === false) {
      this.setState({
        badGuesses: this.state.badGuesses.concat(charOrWord)
      })
    }
  }

  render() {
    const { classes } = this.props
    let { currentWordView, secretWord } = this.state;
    let greet = <IntroText />
    let greetButton = <GenerateButton handleSave={this.handleSave} />
    let reset = <Button onClick={this.reset}>Reset</Button>

    let isGameLost = (this.state.currentStages === 0) && this.state.guess !== this.state.secretWord;

    return (
      <div>
        <Container className={classes.container} >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            {this.state.hasGameStarted ?
              <Board secretWord={secretWord} currentWordView={currentWordView} /> : null}
            {this.state.hasGameStarted ? reset : null}

            {/* // TODO This game logic shouldnt be here. */}
            {isGameLost ? <Redirect to='/LosePage' /> : null}

            {!this.state.hasGameStarted ? greet : null}

            {!this.state.hasGameStarted ? greetButton : null}

            {this.state.hasGameStarted ?
              <Grid item xs zeroMinWidth>
                <WheelHUD
                  submitFinalGuess={this.submitFinalGuess}
                  handleGuess={this.handleGuess}
                  guess={this.state.guess}
                  currentStages={this.state.currentStages}
                  badGuesses={this.state.badGuesses}
                />
              </Grid> : null}
          </Grid>

        </Container>
      </div>);


  }
}

export default withStyles(styles)(MainPage);