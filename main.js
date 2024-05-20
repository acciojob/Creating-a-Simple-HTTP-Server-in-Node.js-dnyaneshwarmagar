const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  // TODO: Send the ""Hello, world!"" response

  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send the response body "Hello, world!"
  res.end('Hello, world!');
  
});

server.listen(port, () => {
  // TODO: Log a message to the console when the server starts listening on the port
  console.log(`Server is listening on port ${port}`);
});

// DO NOT EDIT BELOW THIS LINE

module.exports = { server }
