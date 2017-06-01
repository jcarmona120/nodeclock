const express = require('express');
const app = express();
const moment = require('moment');
const path = require('path') //To get the file path to a folder we will require the native Node moduel, path.

app.use(express.static(path.join(__dirname + '/public'))); //dirname contains file path of current folder. second parameter is folder containing static resources.

app.get('/', function (req, res) {
  var day = moment().format("ddd, hA");
  res.send(day);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
