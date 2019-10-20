const { generateRandomNumbers } = require('../serverUtils');
class Game {
  constructor(Player, playerSettings) {
    this.player = Player;
    this.playerSettings = playerSettings
    this.currentStage = 6
    this.hasGameStarted = false;
    this.secret
  }

  generateSecretWord() {
    let gameSettings = this.player.getGameSettings()

  }
}