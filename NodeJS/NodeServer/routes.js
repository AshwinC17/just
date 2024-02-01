const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method;

    if(url === '/') {
        const existingMessages = fs.readFileSync('message.txt', 'utf8').split('\n').reverse();

        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');

        existingMessages.forEach((message) => {
        if (message.trim() !== '') {
            res.write(`<div>${message}</div>`);
        }
        });

        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method == 'POST') {
        const body = [];
        req.on('data', (chunk) => {
        body.push(chunk);
        });
        req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        
        fs.appendFileSync('message.txt', message + '\n', (err) => {
            if (err) console.error(err);
        });
        res.statusCode = 302;
        res.setHeader('Location', '/');
        res.end();
        });
        return;
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>Welcome to my Node Js project</h1></body>');
    res.write('</html>');
    res.end();

};

//module.exports = requestHandler;

module.exports = {
    handler: requestHandler,
    someText: 'Some hard coded text'
};

//exports.handler = requestHandler;
//exports.someText = 'Some hard coded text';

//module.exports.handler = requestHandler;
//module.exports.someText = 'Some hard coded text';