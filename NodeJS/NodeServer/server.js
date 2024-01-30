const http = require('http');

const server = http.createServer((req, res) => {
  res.end('Ashwin C');
});


server.listen(4000);
