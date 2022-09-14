// const http = require('http');
// const server=http.createServer((req,res)=>{
//     console.log('Aakriti');
// });

// server.listen(4000);

// const http = require('http');
// const server =http.createServer((req,res)=>{
//     console.log(req.url,req.method,req.headers);

//     res.setHeader('Content-Type','text/html');
//     res.write('<html>');
//     res.write('<head><title>MY FIRST/</title></head>')

//     if(req.url==='/home')
//     {
//     res.write('<body><h1>WELCOME HOME </h1></body>')
// }
//     else if(req.url==='/about')
//     {
//     res.write('<body><h1>WELCOME TO ABOUT US Page </h1></body>')
// }
//     else if(req.url==='/node')
//     {
//     res.write('<body><h1>Hello from my Node.js Server~!</h1></body>')
// }
//    else{
//     res.write('<body><h1>HelloWorld!!!</h1></body>')
//    }
//     res.write('/html');
//     res.end();
    
// })
// server.listen(4000);