const http = require("http");

let host = "127.0.0.1";
let port = "3000";

let server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-type": "text/plain"});
    res.write("String served");
    res.end("It's working");
})

server.listen(port, host, (err) =>{
    if(err){
        return console.log("Error occured :", err);
    }

    console.log("Listening on "+host+":"+port);
})
