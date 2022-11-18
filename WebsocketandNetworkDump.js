// Terrible layout, but everything Im going to use will be put into this file for the backend and cleanedup on Monday

// PSUEDO CODE FOR SERVER 
// This websocket should be created by using ${IP + API} upon cicking the connect button. 

// Selecting the IP address from the drop down should happen on page load. The OS command should be first. This os command returns the available IP addresses in an object. which is looped through to provide the dropdown options. Each item should be listed by the address value pulled from the object. Once an option is selected, it feeds the ${IPaddress} to the API url and enables the connect button. the disconnect button is more simple and is built by simply using the end or disconnect command .on(click, disconnect). 

// client authentication
Client authentication
import { createServer } from 'http';
import { WebSocketServer } from 'ws';

const server = createServer();
const wss = new WebSocketServer({ noServer: true });

wss.on('connection', function connection(ws, request, client) {
  ws.on('message', function message(data) {
    console.log(`Received message ${data} from user ${client}`);
  });
});

server.on('upgrade', function upgrade(request, socket, head) {
  // This function is not defined on purpose. Implement it with your own logic.
  authenticate(request, function next(err, client) {
    if (err || !client) {
      socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n');
      socket.destroy();
      return;
    }

    wss.handleUpgrade(request, socket, head, function done(ws) {
      wss.emit('connection', ws, request, client);
    });
  });
});

server.listen(2121);


// client websocket shit// Websocket client side

const { on } = require('events');
import WebSocket from 'ws';

let socket = new WebSocket(`ws://localhost:2121 + ${selectedIPAddress}`);

socket.onopen = (event) => {
    alert("[open] Connection established");
    socket.send('WebSocket opened');
};

socket.onmessage = (event) => {
    alert('Data received from server');
    console.log(event.data);
};

// closing party below
on("click", )
socket.close(1000, "Work complete");

// recieving the close party
socket.onclose = function(event) {
  if (event.wasClean) {
    alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    alert('[close] Connection died');
  }
};

socket.onerror = function(error) {
  alert(`[error]`);
};



// Node OS Module for discovering local network adapters that I can connect to 
// Node.js program to demonstrate the   
// os.networkInterfaces() Method
  
// Allocating os module
const os = require('os');
  
// Print os.networkInterfaces() value
console.log(os.networkInterfaces());


// The second half of this page is built to send data to and from the IP address selected. The server will make the connection once the connect button button is pressed, the handshake occurs, and the webpage provides a space for the data to be sent. the send button contains a function that is basically (wait or is this client side server function??? socket.onmessage = (event) => {console.log(event.data);}); )

// send message from the form
document.forms.publish.onsubmit = () => {
  let outgoingMessage = this.message.value;
  socket.send(outgoingMessage);
  return false;
};

// The end of this page should ensure all websockets are disconnected when the browser is closed.


// Potentially garbage code Im too scared to throw away yet:

// message received - show the message in div#messages
// socket.onmessage = function(event) {
//   let message = event.data;

//   let messageElem = document.createElement('div');
//   messageElem.textContent = message;
//   document.getElementById('messages').prepend(messageElem);
// }

// form.onsubmit = (event) => { event.preventDefault(); addTodo(input.value); }
