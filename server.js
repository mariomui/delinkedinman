require('dotenv').config();
const express = require('express');
const path = require('path');
const port = process.env.EXPRESS_PORT || 4000;
const devport = process.env.DEV_PORT || 9002;
const app = express();

const v1 = express();
// const v1routes = require('./routes/v1routes');

app.use(express.static(path.resolve(__dirname, './client/public')));

app.use('/v1/', v1);
const log = (req, res, next) => { console.log('hi'); next(); }
v1.get('/', [log, log, log], (req, res) => {
  res.send('hey')
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/more', (req, res) => {
  res.send('hey');
});

app.get('/use', (req, res) => {
  res.send('great');
})

app.listen(port, () => {
  console.log(`Production app serves out of port ${port}!`);
  console.log(`Development serves out fo port ${devport}`);
})