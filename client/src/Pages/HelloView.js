import React, { Component } from 'react';

class Hello extends Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: null,
      currentStages: 7,
      secretWord: '',
      currentWordView: [],
      open: false
    }
  }
  handleClickOpen = () => {
    this.setState({
      open: true
    })
  };
  handleClose = () => {
    this.setState({
      open: false
    })
  };
  render() {
    return (
      <div onClick={this.handleClickOpen}>
        mighty lion
    </div>
    )
  }
}

class HelloView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hello: 'hi'
    }
  }
  render() {
    return (

      <div>
        kjkjfdkfj
    </div>
    )
  }
}

export default Hello;