// Requirements
const { on } = require('events');
const path = require('path');
const { app, BrowserWindow } = require('electron');
const os = require('os');
const WebSocket =  require('ws');
const { WebSocketServer } =  require('ws');


// find IPs
const interfaces = os.networkInterfaces();
for(key in interfaces){
    for(network in interfaces[key]){
        const n = interfaces[key][network];
if(n.family === 4){
    const optionalIPAddress = []
    optionalIPAddress.push(interfaces[key][network].address)
    // console.log(optionalIPAddress)
    };
};
};


// Connect button

function conToSocket(){
    const webSocket = new WebSocket('ws://192.168.84.33:2121/');

  
  webSocket.onopen = (event) => {
      console.log("Connection established");
      webSocket.send('WebSocket opened');
  };
};
conToSocket()