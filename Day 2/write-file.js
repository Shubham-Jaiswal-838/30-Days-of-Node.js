const http = require("http");
const fs = require("fs");

http.createServer((req, res) =>{
    res.writeHead(200, {"Content-type": "text/plain"});
     
    // Async way 
    // fs.writeFile("written-file.txt", "Hello world", (err) =>{
    //     if(err) throw err;

    //     console.log("Written success");
    //     res.end()
    // })
    

    // Sync way 

    fs.writeFileSync("written-file.txt", "Updated content");
    console.log("Created Success");
    res.end();

}).listen(3000);