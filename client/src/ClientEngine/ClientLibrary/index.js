import { errorHandler } from './errorHandler';

const getRulesetBasedOnDifficulty = (state) => {
  let ruleset = {};
  switch (Number(state.difficulty)) {
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
        maxLength: 20,
      }
      break;
    case 8:
      ruleset = {
        difficulty: 6,
        minLength: 8,
        maxLength: 30
      }
      break;
    default:
      return {
        difficulty: 6,
        minLength: 8,
        maxLength: 12
      }
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
  getOne,
  errorHandler
}

