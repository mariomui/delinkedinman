import call from './RequestEngine';
import ClientLib from '../ClientEngine/ClientLibrary'

class Clientgame {
  constructor(state, playerInfoObject = null, stateChanger) {
    this.difficulty = state.difficulty;
    this._count = 35;
    this.latestGameId = 0;// real hacky her
    this.stateChanger = stateChanger
    this._gameObjects = [{
      playerInfoObject,
      secretWord: null,
      difficulty: state.difficulty,
      currentStages: 7, //TODO set these according to gametype
      gameType: state.gameType,
      currentWordView: [],
      gameNo: 0,
      stateChanger,
    }];
    this.currentGame = this._gameObjects[this.latestGameId];

    this._emptyGameObject = {
      playerInfoObject,
      difficulty: state.difficulty,
      currentStages: 7, //TODO set these according to gametype
      gameType: null,
      currentWordView: [],
      gameNo: 0,
      stateChanger,
    }
  }
  getDictOffset() {
    return ClientLib.generateRandomNumber(0, 1000);
  }
  populate = (ruleset) => {
    ruleset.count = this._count;
    ruleset.start = this.getDictOffset();
    return ruleset;
  }

  getWord(state) {
    let ruleset = ClientLib.getRulesetBasedOnDifficulty(state.difficulty);
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

          this._updateOrCreateGameObject({
            secretWord: secretWord,
          });
          return secretWord;
        } else {
          return null;
        }
      })
      .catch((err) => {
        ClientLib.errorHandler(err, 'could not generate a response from calling myself')
      });
  }

  _updateOrCreateGameObject = (keypairs, gameId = 0) => {

    let currentGame = this._gameObjects[gameId];

    // let backup = this.cloneGameObject(this._gameObjects);
    try {

      Object.assign(currentGame, keypairs);
      this._initializeGame();
    } catch (err) {

      ClientLib.errorHandler(err, "updateGameObject could not update the gameObject");
      this.resetCurrentGame(this._emptyGameObject, gameId);
    }

  }

  resetCurrentGame(backup = this._emptyGameObject, gameId) {
    //TODO, this basically wipes your game.
    Object.assign(this._gameObjects[gameId], backup);
  }

  updateTheView(gameObject) {
    //TODO make sure gameObject matches with state..
    this.stateChanger(gameObject);
  }

  /**
   * this should set up all the variables a game needs
   * secretword and currentwordview is a must.
   */
  _initializeGame() {
    try {
      this._setCurrentWordView(this._gameObjects[this.latestGameId].secretWord);
    } catch (err) {
      ClientLib.errorHandler(err, 'error with client initializing the game');
    }
    return null;
  }

  _setCurrentWordView(secretWord) {
    if (!secretWord || !secretWord.length) {
      ClientLib.errorHandler(null, 'secretword is not there. check your word generation')
    }
    let gameId = this._getCurrentGameId();
    this._gameObjects[gameId].currentWordView = secretWord.split('');
  }

  //TODO updatingcurrentwordview can ocme later

  _getCurrentGameId = () => this._gameObjects.length - 1;

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
    if (this.isCharGood(guess)) {
      //update game worldview
      let updateds = this.stripWordView(guess);
      this._updateCurrentWordView(updateds)
      //TODO make a global syncing class.
      //condition that guess is correct
    } else {
      //condition that guess is wrong
      let currentStages = this._decreaseStages();
      this.stateChanger({ currentStages });
    }
  }
  _decreaseStages() {
    let { currentStages } = this.currentGame
    this.currentGame.currentStages = currentStages - 1;
    return currentStages - 1;
  }
  isCharGood(guess) {
    return !!(this.currentGame.currentWordView.includes(guess));
  }
  stripWordView(guess) {
    let currentWordView = this.currentGame.currentWordView;
    for (let i = 0; i < currentWordView.length; i++) {
      if (currentWordView[i] === guess) {
        currentWordView[i] = '~';
      }
    }

    return currentWordView;
  }
  _updateCurrentWordView(updateds) {

    ClientLib.errorHandler(JSON.stringify(updateds), 'this is the currentWordview');
    this._gameObjects[this.latestGameId].currentWordView = updateds;
    this.stateChanger({ currentWordView: updateds });
  }
  //this function is not used or ready for primetime.
  cloneGameObject(gameObject) {
    let backup = {};
    // ClientLib.errorHandler(gameObject);
    //TODO do a deepCopy of gameObject.
    return backup
  }
  //last line of class
}


export default Clientgame