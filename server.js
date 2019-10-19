const express = require('express');
const port = 4000;
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, './client/public')))
// app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))