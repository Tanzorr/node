const http = require('http');
const route = require('./router')


let server = http.createServer(route);

server.listen(3005);