const http = require("http");
const fs = require("fs");

http.createServer((req, res) =>{
    res.writeHead(200, {"Content-type": "text/plain"});
  
    // Asynchronous Way to read data 
    // fs.readFile("KeyPoints.txt", (err, data) =>{
    //     if(err){
    //         res.end("Error occured", err);
    //     }else{
    //         res.end(data);
    //     }
    // })

    // Synchronous Way to read data 
    var filename = 'KeyPoints.txt'; //Name of the file to be read
    var content = fs.readFileSync(filename);
    //  console.log('Content : ' + content);
    res.end(content);
    

}).listen(3000);