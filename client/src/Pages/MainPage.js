import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
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

  handleSave = (difficulty) => {

    this.setState({
      difficulty,
    }, () => {
      return true;
    })
  }

  render() {
    const { classes } = this.props
    return (
      <div>
        <Container className={classes.container} >
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <IntroText />
            {/* <Button className={classes.button}> Generate</Button> */}
            <GenerateButton handleSave={this.handleSave} />
          </Grid>

        </Container>
      </div>);


  }
}

export default withStyles(styles)(MainPage);