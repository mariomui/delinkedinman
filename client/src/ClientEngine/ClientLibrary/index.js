const getRulesetBasedOnDifficulty = (difficulty) => {
  let ruleset = {};

  switch (difficulty) {
    case 2:
      ruleset = {
        difficulty: 2,
        minLength: 4,
        maxLength: 6,
      }
      break;
    case 4:
      ruleset = {
        difficulty: 4,
        minLength: 5,
        maxLength: 7,
      }
      break;
    case 6:
      ruleset = {
        difficulty: 6,
        minLength: 7,
        maxLength: 8,
      }
      break;
    case 8:
      ruleset = {
        difficulty: 6,
        minLength: 8,
        maxLenght: 12
      }
      break;
    default:
      return null
  }

  return ruleset;
}

const generateRandomNumber = (low, high) => {
  return Math.floor(Math.random() * (high - low + 1) + low);
}

const getOne = (words) => {
  let num = generateRandomNumber(0, (words.length - 1))
  console.log(words, 'words');
  return words[2];
}
export default {
  getRulesetBasedOnDifficulty,
  generateRandomNumber,
  getOne
}

