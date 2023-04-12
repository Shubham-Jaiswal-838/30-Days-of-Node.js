const http = require("http");
const fs = require("fs");

http.createServer((req, res) =>{
      
     res.writeHead(200, {"Content-type": "video/mp4"});

     fs.access("video.mp4", (err) =>{
          if(err){
               res.end("Error occured", err);
          }else {

               const rstream = fs.createReadStream("video.mp4");
               rstream.pipe(res);
          }
     })
}).listen(3000);