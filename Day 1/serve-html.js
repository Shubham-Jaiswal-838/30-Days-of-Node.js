const http = require("http");
const fs = require("fs");

let host = "127.0.0.1";
let port = "3000";

let server = http.createServer((req, res) =>{
    //  res.write("<h1>Hello world</h1>");
     fs.readFile("index.html", (err, data) =>{
     res.writeHead(200, {"Content-type": "text/html"});

        if(err){
            throw err;
        }
        console.log("Operation success");
        res.end(data);
     })
     
})

server.listen(port, host, (err) =>{
    if(err){
        return console.log("Error occured :", err);
    }
    console.log("Listening on "+host+":"+port);
})