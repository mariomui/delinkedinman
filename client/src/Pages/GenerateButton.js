import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import GenerateButtonModal from './GenerateButtonModal'
import { Phone } from '../ClientEngine/RequestEngine'
const styles = theme => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  butter: {
    height: 74 + 'px',
    width: 233 + 'px'
  }
});

class GenerateButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: null,
      currentStages: 7,
      secretWord: '',
      currentWordView: [],
      open: false,
      hasGameStarted: false
    }
  }

  handleClickOpen = () => {
    this.setState({
      open: !this.state.open
    })
  };

  handleClose = () => {
    this.setState({
      open: !this.state.open
    })
  };

  handleSave = ({ difficulty }) => {
    this.setState({
      difficulty
    })
  }

  render() {
    const { classes } = this.props;

    return (
      <div>
        {/* This is the button for the front page */}
        {/* {If game has started hide this generate button} */}
        {/* {!this.state.hasGameStarted ? */}
        <Button className={classes.butter} variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Generate
        </Button>

        <GenerateButtonModal onClick={this.handleClickOpen} handleSave={this.handleSave} handleClose={this.handleClose} open={this.state.open} />
      </div >)
  }
}

export default withStyles(styles)(GenerateButton);