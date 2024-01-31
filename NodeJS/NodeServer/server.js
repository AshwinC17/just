const http = require('http');
const fs = require('fs');

// const server = http.createServer((req, res) => {
//   const url = req.url;
//   if (url === '/home') {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<body><h1>Welcome home</h1></body>');
//     res.write('</html>');
//     res.end();
//   } else if (url === '/about') {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<body><h1>Welcome to About Us page</h1></body>');
//     res.write('</html>');
//     res.end();
//   } else if (url === '/node') {
//     res.setHeader('Content-Type', 'text/html');
//     res.write('<html>');
//     res.write('<body><h1>Welcome to my Node Js project</h1></body>');
//     res.write('</html>');
//     res.end();
//   }
// });

// server.listen(4000, () => {
//   console.log('Server is running on http://localhost:4000/');
// });


const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if(url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method == 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  
  res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    res.end();
})

server.listen(4000);