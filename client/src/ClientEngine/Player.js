class Player {
  constructor(playerInfoObject) {
    let { name, GameInstance } = playerInfoObject;
    this.name = name;
    this.GameInstance = GameInstance
  }
  makeAWordGuess(word) {
    this.GameInstance.submitGuess(word);
  }
  makeACharGuess(char) {
    this.GameInstance.submitGuess(char);
  }
}