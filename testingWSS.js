const { on } = require('events');
const { WebSocketServer } =  require('ws');
const wss = new WebSocketServer({ port: 2121 });


wss.on('connection', function connection(ws, request, client) {
    ws.on('message', function message(data) {
      console.log(`Received message ${data} from user ${client}`);
    });
  });
  
  wss.on('upgrade', function upgrade(request, socket, head) {
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
  
  