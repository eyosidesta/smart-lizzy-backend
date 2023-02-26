const express = require('express')
const app = express()
const server = require('http').createServer(app);
const WebSocket = require('ws');
const dummyWords = require('./dummy-words')

const wss = new WebSocket.Server({ server:server });


wss.on('connection', function connection(ws) {
  ws.send('Welcome New Client!');

  ws.on('message', function incomming(message) {
    for(let i = 0; i < dummyWords.length; i++) {
        if(message == dummyWords[i].charAt(0)) {
            ws.send(dummyWords[i])
        }
    }
  });
});

server.listen(8000, () => {
    console.log(`Lisening on port :8000`)
})