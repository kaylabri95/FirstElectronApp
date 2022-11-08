// Requirements
const WebSocketServer = "ws";
const { on } = require('events');
const os = require('os');
const server = createServer();
const wss = new WebSocketServer({ port: 2121});
const path = require('path');
const { app, BrowserWindow } = require('electron');


// Window pops up
const createMainWindow = () => {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
    });
  
    mainWindow.loadFile(path.join('index.html'));
  };
  
  app.whenReady().then(() => {
    createMainWindow();
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createMainWindow();
      }
    });
  });
  
// Dropdown list
// Get list of os.networkInterfaces() values
listIPs(() => {
    os.networkInterfaces().
    let addresses = []
    (Object.values(obj));
    
    // let result = objArray.map(a => a.foo);
    
    
});
console.log(os.networkInterfaces());


// Connect button
let Server = WebSocket('ws://169.254.255.66:2121/');

conToSocket(() => {
    let socket = new WebSocket(`ws://${selectedIPAddress}:2121/`);
  });
  
  socket.onopen = (event) => {
      alert("[open] Connection established");
      socket.send('WebSocket opened');
  };

http.createServer((req, res) => {
    // here we handle websocket connections, if other kinds of connections need to be accounted for, you need to also handle them here
    wss.handleUpgrade(req, req.socket, Buffer.alloc(0), onSocketConnect);
});

// Disconnect Button
disconToSocket(() => {
    socket.close(1000, "Work complete");
});

// Text field

// send button
sendData() = () => {
    let outgoingMessage = this.message.value;
    socket.send(outgoingMessage);
    return false;
  };
// On error
socket.onerror = function(error) {
    alert(`[error]`);
  };
// app closes on exit
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });