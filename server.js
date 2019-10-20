require('dotenv').config();
const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');

const mongodb = require('./db');

const port = process.env.EXPRESS_PORT || 4000;
const devport = process.env.DEV_PORT || 9002;

const v1 = express();
// const v1routes = require('./routes/v1routes');

const { json, urlencoded } = bodyParser;

app.use(json());
app.use(urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, './client/public')));

app.use('/v1', v1);
// const log = (req, res, next) => { console.log('hi'); next(); }
const protect = (req, res, next) => {
  if (req.query.secret === 'mario') {
    return next();
  }
  res.redirect('/')
}
v1.get('/generateWord', (req, res) => {
  res.json({ hi: 'hi' })
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
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Production app serves out of port ${port}!`);
  console.log(`Development serves out fo port ${devport}`);
})