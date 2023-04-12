const http = require("http");
const fs = require("fs");

http.createServer((req, res) =>{
    res.writeHead(200, {"Content-type": "text/plain"});
    
    // Async way 
    // fs.appendFile("written-file.txt", "Hi, i am appended", (err) =>{
    //     if(err) throw err;

    //     console.log("Appended");
    //     res.end();
    // })

    // Sync way 

    fs.appendFileSync("written-file.txt", "Sync way appended");
    console.log("Sync way appended");
   res.end();

}).listen(3000);