const express = require('express');
const app = express();
const moment = require('moment');


app.get('/', function (req, res) {
  var day = moment().format("ddd, hA");
  res.send(day);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
