import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import VerticalSliders from '../components/Sliders'
import { Hangmansvg } from '../assets/Hangmansvg'
import { Wheelsvg } from '../assets/Wheelsvg';
import { Vetdogsvg } from '../assets/Vetdogsvg';
import { Ufrisbeesvg } from '../assets/Ufrisbeesvg';
import { Accredit } from '../assets/CreditToNoun.js';
import { accredited } from '../assets/accredited';
import { styles } from '../assets/PageStyles/GenerateButtonModal.theme'

class GenerateButtonModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gameType: 'wheel',
      difficulty: 2,
      toggle: false
    }
  }

  handleSelectDifficulty = (e) => {
    e.preventDefault();
    let num = document.querySelector('input[name=targetInput]').value;
    this.setState({
      difficulty: num * 1
    })
  }

  handleSelect = (e) => {
    e.preventDefault()
    console.log(e);
    e.target.style = `border: 2px solid #dadada; border-radius: 20% 20%`;
    if (this.state.toggle) {
      e.target.style.background = '#C4E4FF';
    }
    this.setState({
      toggle: !this.state.toggle,
      gameType: this.state.toggle ? e.target.parentElement.getAttribute('name') : this.state.gameType

    })
  }

  saveAndClose = () => {
    const { handleClose, handleSave } = this.props;
    const { difficulty } = this.state;
    handleSave(difficulty * 1);

  }

  render() {
    const { handleClose, open } = this.props
    const { classes } = this.props;
    return (
      <div style={{ width: '100%' }}>

        <Dialog maxWidth='md' className={classes.modal} onClose={handleClose} open={open}>
          <DialogTitle className={classes.title}>
            <b> Game Settings</b>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>

          </DialogTitle>
          <DialogContent className={classes.dialogContent} dividers>

            <VerticalSliders onChoose={this.handleSelectDifficulty} style={{ gridArea: 'side' }} />

            <Hangmansvg classes={classes.nonactive} style={{ gridArea: 'g1' }} />
            <p>Coming soon! Hangman Style!</p>

            <Wheelsvg onClick={this.handleSelect} classes={classes.active} style={{ gridArea: 'g2' }} />
            <b>Wheel of Fortune Style!</b>


            <Ufrisbeesvg classes={classes.nonactive} style={{
              gridArea: 'g2'
            }} />
            Coming Soon!

            <Vetdogsvg classes={classes.nonactive} />
            Coming Soon!

            <h2 style={{
              gridArea: 'name', gridColumn: 'unset'
            }}>

              Difficulty
            </h2>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.saveAndClose} color="primary">
              Save changes
            </Button>

            <Accredit credits={accredited} />

          </DialogActions>

        </Dialog>
      </div>

    )
  }
}

export default withStyles(styles)(GenerateButtonModal);