class Player {
  constructor(name) {
    this.name = name;
    this._gameSettings = null;
  }
  createGameSettings(gameSettings) {
    this._gameSettings = gameSettings;
    return !!this._gameSettings
  }

  getGameSettings() {
    if (!this._gameSettings) return false;
    return this.gameSettings;
  }
}

