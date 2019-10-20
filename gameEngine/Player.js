class Player {
  constructor(name) {
    this.name = name;
    this._gameSettings = null;
  }
  /**
   * 
   * @param {*} gameSettings 
   * difficulty: 2, 4, 8
   * 
   */
  createGameSettings(gameSettings) {
    this._gameSettings = gameSettings;
    return !!this._gameSettings
  }

  getGameSettings() {
    if (!this._gameSettings) return false;
    return this.gameSettings;
  }
}

