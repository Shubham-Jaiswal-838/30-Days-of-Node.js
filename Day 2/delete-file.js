const http = require("http");
const fs = require("fs");

http.createServer((req, res) =>{
    res.writeHead(200, {"Content-type": "text/plain"});
    // fs.unlink("delet.txt", (err) =>{
    //     if(err) throw err;

    //     console.log("Deleted");
    //     res.end();
    // })

    // Sync way 

    fs.unlinkSync("delet.txt");
    console.log("deleted");
    res.end();
    

}).listen(3000);