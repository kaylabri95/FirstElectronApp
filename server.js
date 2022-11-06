// Terrible layout, but everything Im going to use will be put into this file for the backend and cleanedup on Monday

// PSUEDO CODE FOR SERVER 
// This websocket should be created by using ${IP + API} upon cicking the connect button. 

// Selecting the IP address from the drop down should happen on page load. The OS command should be first. This os command returns the available IP addresses in an object. which is looped through to provide the dropdown options. Each item should be listed by the address value pulled from the object. Once an option is selected, it feeds the ${IPaddress} to the API url and enables the connect button. the disconnect button is more simple and is built by simply using the end or disconnect command .on(click, disconnect). 


// form.onsubmit = (event) => { event.preventDefault(); addTodo(input.value); }





// Websocket client side
const socket = new WebSocket('ws://localhost:8000');

socket.onopen = (event) => {
    // on connection do something
    socket.send('WebSocket opened');
};

socket.onmessage = (event) => {
    // message from server
    console.log(event.data);
});


// Node OS Module for discovering local network adapters that I can connect to 
// Node.js program to demonstrate the   
// os.networkInterfaces() Method
  
// Allocating os module
const os = require('os');
  
// Print os.networkInterfaces() value
console.log(os.networkInterfaces());


// The second half of this page is built to send data to and from the IP address selected. The server will make the connection once the connect button button is pressed, the handshake occurs, and the webpage provides a space for the data to be sent. the send button contains a function that is basically (wait or is this client side server function??? socket.onmessage = (event) => {console.log(event.data);}); )


// The end of this page should ensure all websockets are disconnected when the browser is closed.