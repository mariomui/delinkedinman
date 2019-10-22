const { generateRandomNumbers } = require('../serverUtils');

class Game {
  constructor(Player, playerSettings) {
    this.player = Player;
    this.playerSettings = playerSettings
    this.currentStages = 6
    this.hasGameStarted = false;
    this.secretWord = null;
    this.currentGuess = [];
  }

  generateSecretWord() {
    let gameSettings = this.player.getGameSettings()

  }

  startGame() {

  }

  endGame() {

  }


}