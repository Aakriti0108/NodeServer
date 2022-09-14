const http =require('http');

const routes=require('./home')

// const server =http.createServer(routes);
console.log(routes.someText);
const server =http.createServer(routes.handler);

server.listen(4000);
