const fs = require("fs");
const http = require("http");
const url = require("url");


const myServer = http.createServer((request, response) => {
    const requestUrl = url.parse(request.url).pathname;

        if (requestUrl === "/") {
            fs.readFile("./object.json", "utf8", (error, data) => {
                if (error){
                    response.writeHead(404);
                    response.write("file not found");
                } else {
                    response.writeHead(200, { "Content-Type": "application/json" });
                    response.end(JSON.stringify(data));
                }
            });
            
        } else if (requestUrl === "/tentang-saya"){
            fs.readFile("./index.html", null, (error, data) => {
                if (error) {
                    response.writeHead(404);
                    response.write("page not found")
                } else {
                    response.writeHead(200, { "Content-Type": "text/html" });
                    response.write(data);
                }

                response.end();
            });
        } else {
            response.writeHead(404);
            response.write("file not found");
        }
});

myServer.listen(8080);