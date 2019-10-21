import call from './RequestEngine';
// import ClientLib from './ClientLibrary/'
import ClientLib from '../ClientEngine/ClientLibrary'
class Clientgame {
  constructor(difficulty) {
    this.difficulty = difficulty
    this._count = 35;
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
    console.log(fullRuleset)
    return call.mySelf({
      url: '/generateWord',
      params: fullRuleset
    })
      .then((response) => {
        let { data } = response;
        if (data.words.length) {
          console.log('data', data)
          return ClientLib.getOne(data.words)
        } else {
          return null;
        }
      })
      .catch(console.log);
  }
}


export default Clientgame