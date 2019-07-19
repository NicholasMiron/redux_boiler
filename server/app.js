const express = require('express');

const app = express();

app.use(express.static('dist'));

app.use('/', (req, res) => {
  res.send('done');
});


module.exports = app;
