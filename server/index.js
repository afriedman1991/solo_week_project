const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, '/../client/dist')));

app.get('/', function(req, res) {
  res.send('Hello world!');
});

io.on('connection', socket => {
  console.log('a user connected');
  socket.on('disconnect', function() {
    console.log('a user disconnected');
  });

  socket.on('chat message', msg => {
    console.log(`message: ${msg}`);
    io.emit(`chat message`, msg);
  });
});

let port = 3000;
http.listen(port, function(err) {
  if (err) throw err;
  console.log(`listening on port ${port}`);
});
