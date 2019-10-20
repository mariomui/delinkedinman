require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');

const mongodb = require('./db');
const datacenter = require('./datacalls');
const utils = require('./serverUtils');

const port = process.env.EXPRESS_PORT || 4000;
const devport = process.env.DEV_PORT || 9002;

const v1 = express();
// const v1routes = require('./routes/v1routes');

const { json, urlencoded } = bodyParser;
const { errorHandler } = utils;

// const queryTests = [
//   datacenter.validateQueryForWordGeneration,
//   datacenter.transformQueryForWordGeneration
// ]

app.use(json());
app.use(urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, './client/public')));

app.use('/v1', v1);

const protect = (req, res, next) => {
  if (req.query.secret === 'mario') {
    return next();
  }
  res.redirect('/')
}


v1.get('/generateWord', datacenter.queryTests, (req, res) => {
  // const { difficulty, start, count, minLength, maxLength } = req.params;
  let options = res.locals && res.locals.options
  if (!options) res.status(404).send('no good');
  datacenter.getDictionaryWord(options)
    .then((data) => {
      if (data['data'].length) {
        res.status(200).end(data['data']);
      } else {

        res.status(201).end('error');
      }
    })
    .catch(errorHandler);
})
v1.get('/test', (req, res) => {
  res.send(200).send('done');
})
v1.post('/test', (req, res) => {
  console.log(req.body);
  res.status(200);
})
v1.post('/create', protect, (req, res) => {

  const { name } = req.query;
  mongodb.createUser(name);
  res.status(200).send('hey')
});

app.get('/stand', (req, res) => {
  res.send('Hello Worsd!');
});

app.listen(port, () => {
  console.log(`Production app serves out of port ${port}!`);
  console.log(`Development serves out fo port ${devport}`);
})