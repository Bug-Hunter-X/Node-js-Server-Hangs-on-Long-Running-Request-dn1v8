const http = require('http');

const server = http.createServer((req, res) => {
  // Simulate a long-running task asynchronously
  const start = Date.now();
  let elapsed = 0;
  const intervalId = setInterval(() => {
    elapsed = Date.now() - start;
    if (elapsed >= 5000) {
      clearInterval(intervalId);
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      res.end('Hello World!');
    }
  }, 100); // Check every 100ms
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});