// Requirements
const { on } = require('events');
const os = require('os');

const path = require('path');
const { app, BrowserWindow } = require('electron');
const { WebSocketServer } =  require('ws');

// Window pops up
function createWindow () {
    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    })
  
    win.loadFile('index.html')
  }
  
  app.whenReady().then(() => {
    createWindow()
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
      }
    })
  })
  
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
// Dropdown list
// Get list of os.networkInterfaces() values  // plug them into the dropdown
const interfaces = os.networkInterfaces();

const ipaDropDown = document.getElementById("ipaDropDown")

function dropDownCreation(){
for(key in interfaces){
    for(network in interfaces[key]){
        const n = interfaces[key][network];
if(n.family === 4){
    let option = document.createElement("option");
    option.setAttribute('value', data[key][network].address);
  
    let optionText = document.createTextNode([key][network].address);
    option.appendChild(optionText);
    ipaDropDown.appendChild(option);
  }
    // const optionalIPAddress = []
    // optionalIPAddress.push(interfaces[key][network].address)
    // console.log(optionalIPAddress)
};
};
};
dropDownCreation();

// Buttons turning off and on
const button = document.querySelector("button");
button.setAttribute("disabled", "");

// Connect button
function conToSocket(){
    const webSocket = new WebSocket('ws://127.0.0.1:2121/');
    const wss = new WebSocketServer({ port: 2121});
      
    webSocket.onopen = (event) => {
        alert("[open] Connection established");
        socket.send('WebSocket opened');
  };
  };

// Disconnect Button
disconToSocket(() => {
    socket.close(1000, "Work complete");
});

// Text field

// send button
function sendData() {
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