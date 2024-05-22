const http = require('node:http');
const fs = require('fs');
const { log } = require('node:console');
let home = fs.readFileSync('home.html' , 'utf-8');
let about = fs.readFileSync('about2.html', 'utf-8');
let hostname = '127.0.0.1';
let port = 80;
let server = http.createServer((req,res)=>{
    let url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'Text/html')
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about2.html'){
        res.end(about);
    }
    else {
        res.statusCode = 404;
        res.end("<h1>Error 404 Not found</h1>");
    }
    console.log(url);
})
server.listen(port, hostname ,()=>{
    console.log(`Server running at http://${hostname}:${port}/)`);
});