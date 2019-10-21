import { call } from './RequestEngine';
import ClientLib from './ClientLibrary'
class Clientgame {
  constructor(difficulty) {
    this.difficulty = difficulty
    this._count = 35;
  }
  getDictOffset() {
    return ClientLib.generateRandomNumber(0, 16000);
  }
  populate(ruleset) {
    ruleset.count = this._count;
    ruleset.start = this.getDictOffset();
    return ruleset;
  }

  getWord(difficulty) {
    const getRuleset = (difficulty) => {
      return new Promise((resolve, reject) => {
        let ruleset = ClientLib.getRulesetBasedOnDifficulty(difficulty);
        return resolve(ruleset);
      })
    }
    getRuleset(difficulty)
      .then((answer) => {
        debugger
        console.log(answer);
      })
  }
  //   let fullRuleset = this.populate(ruleset);
  //   return call.mySelf({
  //     url: '/generateWord',
  //     params: fullRuleset
  //   })
  //     .then((data) => {
  //       if (data.length) {
  //         return ClientLib.getOneWord(data)
  //       } else {
  //         return null;
  //       }
  //     })
  //     .catch(console.log);
  // }

}

export { Clientgame }