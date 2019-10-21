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

const count = 35;
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

/**
 * @description generate word but pull from own databases when possible
 */

v1.get('/generateWord', datacenter.queryTests, (req, res) => {
  // const { difficulty, start, count, minLength, maxLength } = req.params;
  let options = res.locals && res.locals.options

  if (!options) res.sendStatus(404)

  let { difficulty, start } = options;

  mongodb.Dict
    .findDict({ difficulty, start })
    .then((found) => {
      if (found) {
        console.log('this was found');
        res.status(400).send(found.words);
      } else {
        datacenter.getDictionaryWord(options)
          .then((data) => {
            if (data.data && data['data'].length) {
              //case1: there is data
              const { difficulty, start } = options;
              let words = data['data'].split('\n');

              mongodb.Dict.createDict({ difficulty, start, words })
                .then((dictCreationReceipt) => {
                  if (dictCreationReceipt) {
                    //Resources Created
                    res.status(201).send(data['data']);
                  } else {
                    // Database error.
                    res.sendStatus(400);
                  }
                }).catch((error) => {
                  // server fail error
                  errorHandler(error);
                  res.sendStatus(404);
                })
            } else {
              // No Data found with those parameters
              errorHandler('The options are good but no value');
              res.sendStatus(404)
            }
          })
          // request error 
          // no response here.
          .catch(errorHandler);
      }
    })


})

v1.get('/testFind', (req, res) => {
  const { difficulty, start } = req.query
  mongodb.Dict
    .findDict({ difficulty, start })
    .then((data) => {
      console.log(data && data.words, 'data here')
      if (!data) {
        console.log('no data')
        res.sendStatus(404)
      } else {
        res.status(200).end('Word Array was found');
      }
    })
    .catch((err) => {
      errorHandler(err);
      console.log('testfind problem')
      res.sendStatus(404).end('Word Array was not found');
    })
})

v1.get('/test', (req, res) => {
  res.send(200).json('done');
})

v1.post('/test', (req, res) => {
  console.log(req.body);
  res.status(200);
})

v1.post('/user', protect, (req, res) => {

  const { name } = req.query;
  mongodb.createUser(name);
  res.status(200).send('hey')
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/public/index.html'))
})
app.listen(port, () => {
  console.log(`Production app serves out of port ${port}!`);
  console.log(`Development serves out fo port ${devport}`);
})