const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ status: 'ok', app: 'vm100-hostnodejs1', timestamp: new Date().toISOString() }));
});

server.listen(port, () => {
  console.log(`vm100-hostnodejs1 running on port ${port}`);
});