const http = require("http");
const fs = require("fs");

http.createServer((req, res) =>{
    res.writeHead(200, {"Content-type": "text/plain"});
     
    // fs.rename("written-file.txt", "contents-file.txt", (err) =>{
    //     if(err) throw err;

    //     console.log("Renamed Success")
    //     res.end()
    // })

    // Sync way 
   //you have to pass the Relative path of the file from the Current working directory.
// fs.renameSync('text-file', 'newData.txt');
// console.log('File renamed successfully');

// // To check it's Synchronous nature !
// console.log("This method is Synchronous");
res.end();

}).listen(3000);