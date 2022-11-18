const ws = new require('ws');
const wss = new WebSocketServer({ port: 2121});
const { on } = require('events');


const clients = new Set();

http.createServer((req, res) => {
    // here we handle websocket connections, if other kinds of connections need to be accounted for, you need to also handle them here
    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
});

// the next two things do the same thing but Im scared to choose yet

wss.on('connection', function connection(ws) {
    ws.on('message', function message(data) {
      console.log('received: %s', data);
    });
});

function onSocketConnect(ws){
    clients.add(ws);

    ws.on('message', function(message) {
        // the below limits the msgs length to 50
        message = message.slice(1,50); 

    for(let client of clients){
        client.send(message);
    }
});
}




// How to get the IP address of the client?
// The remote IP address can be obtained from the raw socket.

// import { WebSocketServer } from 'ws';

// const wss = new WebSocketServer({ port: 8080 });

// wss.on('connection', function connection(ws, req) {
//   const ip = req.socket.remoteAddress;
// });