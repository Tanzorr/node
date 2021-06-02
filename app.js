const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res)=>{
    const url = req.url;
    const method = req.method;
    if (url === '/'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>My First Page</title></head>');
        res.write('<body><form action="/message" method="post"><input name="message" type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }


    if (url === '/message'){
        console.log(url, method);
        fs.writeFileSync('message.txt', 'DYMMY');
        res.statusCode = 302;
        res.setHeader('Location',  '/');

        return res.end();
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>My from my Node.js Server</h1></body>');
    res.write('</html>');
    res.end();

});

server.listen(3000);