const fs=require("fs");
const http=require("http");
const server=http.createServer((req,res)=>{
    const url=req.url;
    const method=req.method;
    const data =fs.readFileSync("C:/Users/HP/Desktop/server/message.txt","utf-8");
    if(url === "/")
    {
        res.write("<html>");
        res.write("<body>");
        res.write(`${data}`)
        res.write(
            "<form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form>"
          );
        res.write("</body>")
        res.write("</html>");
        return res.end();
    }
    if (url === "/message" && method === "POST") {
        const body = [];
        req.on("data", (chunk) => {
          body.push(chunk);
        });
        req.on("end", () => {
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split("=")[1];
          fs.writeFileSync("message.txt", message);
          res.statusCode = 302;
          res.setHeader("Location", "/");
          return res.end();
        });
      }
})

server.listen(3000)