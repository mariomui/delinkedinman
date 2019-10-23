class Player {
  constructor(playerInfoObject) {
    let { name, GameInstance } = playerInfoObject;
    this.name = name;
    this.GameInstance = GameInstance
  }
  makeAWordGuess(word) {
    return this.GameInstance.submitGuess(word);

  }
  makeACharGuess(char) {
    return this.GameInstance.submitGuess(char);

  }
  setGameInstance(GameInstance) {
    this.GameInstance = GameInstance;
  }
}

export default Player;