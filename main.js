const net = require('net');

class SimpleRedis {
  constructor() {
    this.store = {};
  }

  set(key, value) {
    this.store[key] = value;
  }

  get(key) {
    return this.store[key] || null;
  }

  delete(key) {
    delete this.store[key];
  }
}

// Initialize store
const store = new SimpleRedis();

// Create a TCP server
const server = net.createServer((socket) => {
  console.log('Client connected');

  socket.on('data', (data) => {
    const command = data.toString().trim().split(' ');
    const action = command[0].toUpperCase();

    let response = '';

    switch (action) {
      case 'SET':
        const [key, value] = command.slice(1);
        store.set(key, value);
        response = `>> OK\n`;
        break;
      case 'GET':
        const keyToGet = command[1];
        const result = store.get(keyToGet);
        response = result ? `>> ${result}\n` : '>> NULL\n';
        break;
      case 'DELETE':
        const keyToDelete = command[1];
        store.delete(keyToDelete);
        response = `>> OK\n`;
        break;
      default:
        response = '>> Invalid command\n';
    }

    // Send the response with '>>'
    socket.write(response);
  });

  socket.on('end', () => {
    console.log('Client disconnected');
  });
});

// Start the server on port 3001
server.listen(3001, () => {
  console.log('Server is running on port 3001');
});
