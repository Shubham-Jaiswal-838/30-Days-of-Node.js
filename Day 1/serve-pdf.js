const http = require("http");
const fs = require("fs");

const host = "127.0.0.1";
const port = "3000";

http.createServer((req, res) =>{
    res.writeHead(200, {"Content-type": "application/pdf"})
    fs.readFile("Resume-Shubham Jaiswal (1).pdf", (err, data) =>{
        if(err){
           res.json({"status": "error", "msg": "err"});
        }else {
            res.write(data);
            res.end();
        }



    })
}).listen(port);

