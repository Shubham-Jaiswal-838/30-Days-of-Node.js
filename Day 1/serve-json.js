const http = require("http");

const host = "127.0.0.1";
const port = "3000";

const server = http.createServer((req, res) =>{
    res.writeHead(200, {"Content-type": "text/json"});
    let json_response = {
		status : 200 , 
		message : 'succssful' , 
		result : [ 'sunday' , 'monday' , 'tuesday' , 'wednesday' ] , 
		code : 2000
	}
    res.write(JSON.stringify(json_response));
    res.end();
})

server.listen(port, host, (err) =>{
    if(err){
        return console.log("Error occured ", err)
    }

    console.log("Listening on "+host+ ":"+port)
})