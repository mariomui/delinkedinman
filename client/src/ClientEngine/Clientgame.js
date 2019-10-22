import call from './RequestEngine';
import { errorHandler } from '../ClientEngine/ClientLibrary/'
import ClientLib from '../ClientEngine/ClientLibrary'
class Clientgame {
  constructor(difficulty, playerInfoObject = null, stateChanger) {
    this.difficulty = difficulty
    this._count = 35;
    this._gameObjects = [{
      playerInfoObject,
      secretWord: null,
      difficulty,
      currentStages: 7, //TODO set these according to gametype
      gameType: null,
      currentView: null,
      gameNo: 0,
      stateChanger
    }];
    this._emptyGameObject = {
      playerInfoObject,
      secretWord: null,
      difficulty,
      currentStages: 7, //TODO set these according to gametype
      gameType: null,
      currentView: null,
      gameNo: 0,
      stateChanger
    }
  }
  getDictOffset() {
    return ClientLib.generateRandomNumber(0, 1000);
  }
  populate(ruleset) {
    ruleset.count = this._count;
    ruleset.start = this.getDictOffset();
    return ruleset;
  }

  getWord(difficulty) {
    let ruleset = ClientLib.getRulesetBasedOnDifficulty(difficulty);
    let fullRuleset = this.populate(ruleset);

    return call.mySelf({
      url: '/generateWord',
      params: fullRuleset
    })
      .then((response) => {
        let { data } = response;
        if (data.words.length) {
          console.log('data', data)

          let secretWord = ClientLib.getOne(data.words)

          this._updateOrCreateGameObject({ secretWord });
          return secretWord;
        } else {
          return null;
        }
      })
      .catch(console.log);
  }
  _updateOrCreateGameObject(keypairs, gameId = 0) {
    let currentGame = this._gameObjects[gameId];
    // let backup = this.cloneGameObject(this._gameObjects);
    try {
      Object.assign(currentGame, keypairs);
      this._initializeGame();
    } catch (err) {
      if (err) {
        errorHandler(err, "updateGameObject could not update the gameObject");
        this.resetCurrentGame(this._emptyGameObject, gameId);
      }
      errorHandler(err, 'err is false in updateGameObject function');
    }
  }
  resetCurrentGame(backup = this._emptyGameObject, gameId) {
    //TODO, this basically wipes your game.
    Object.assign(this._gameObjects[gameId], backup);
  }

  updateTheView(gameObject) {
    //TODO make sure gameObject matches with state..
    this.state.stateChanger(gameObject);
  }
  /**
   * this should set up all the variables a game needs
   * secretword and currentwordview is a must.
   */
  _intializeGame() {
    try {
      this.setCurrentWordView(this._gameObjects.secretWord);
    } catch (err) {
      errorHandler(err, 'error with client initializing the game');
      return err;
    }
    return null;
  }
  isGuessAWord(guess) {
    if (!guess) return null;
    return (guess.length > 1)
  }

  submitGuess(guess) {
    if (this.isGuessAWord(guess) === null) return null;
    if (this.isGuessAWord(guess)) {
      this.submitWord(guess);
    }
    return this.submitChar(guess);
  }

  submitChar(guess) {

  }

  //this function is not used or ready for primetime.
  cloneGameObject(gameObject) {
    let backup = {};
    errorHandler(gameObject);
    //TODO do a deepCopy of gameObject.
    return backup
  }
  //last line of class
}


export default Clientgame