import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { withStyles } from '@material-ui/styles'
import { IntroText } from '../components/IntroText';
import Grid from '@material-ui/core/Grid';
import GenerateButton from './GenerateButton'
// import Dialog from '@material-ui/core/Dialog';


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
      gameType: ''
    }
  }

  handleSave = (state) => {
    const { difficulty, gameType } = state;
    this.setState({
      difficulty,
      gameType,
      hasGameStarted: true
    })
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