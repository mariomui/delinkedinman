const axios = require('axios');
const url = 'http://app.linkedin-reach.io/words'

const linkedinResource = axios.create({
  baseURL: url,
  timeout: 3000
})
/**
 * 
 * @param {*} options 
 * difficulty, minLength, maxLength, start, count
 * @descript function returns a dictionary word from api point
 */
const getDictionaryWord = (options) => {
  return linkedinResource({
    method: 'get',
    url,
    params: options
  })
}

//validation query chain
// validates query. the query must have all 5 properties.
const validateQueryForWordGeneration = (req, res, next) => {
  let options = req.query;
  let containsAllParams = options.difficulty && options.start
    && options.count && options.minLength && options.maxLength;

  if (containsAllParams) return next();
  res.redirect('/');

}

// ensure corresponding values of keys are correct types.
// res.locals.options houses it all.
const transformQueryForWordGeneration = (req, res, next) => {
  let options = req.query
  for (let key in options) {
    let num = options[key] * 1
    if (!Number.isNaN(num)) {
      options[key] = num;
    }
  }
  res.locals.options = options;
  return next();
}

const matchAgainstAPIrules = (req, res, next) => {
  // minLength !> maxLength
  // difficulty 1...10
  // maxLength >= 0 ; minLength >= 0 (start, count);
  let options = res.locals && res.locals.options;
  let { difficulty, minLength, maxLength, start, count } = options;
  let exitCode = 1;
  if (difficulty < 1 || difficulty > 10) exitCode *= 0;
  if (minLength > maxLength) exitCode *= 0;
  if (maxLength * minLength * start * count === 0) exitCode *= 0;
  exitCode || res.redirect('/');
  return next();
}

const queryTests = [
  validateQueryForWordGeneration,
  transformQueryForWordGeneration,
  matchAgainstAPIrules
];

module.exports = {
  getDictionaryWord,
  queryTests
}