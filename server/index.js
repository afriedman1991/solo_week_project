const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/', function(req, res) {
  res.send('Hello world!');
});

let port = 3000;
app.listen(port, function(err) {
  if (err) throw err;
  console.log(`listening on port ${port}`);
});
