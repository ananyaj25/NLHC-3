const http = require('http')
const fs = require('fs');


const mongoose = require('mongoose')


const DB = 'mongodb+srv://Sachin:physics25@cluster0.zi0bae0.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(DB).then(()=>{
	console.log("connecting successful");
}).catch((e)=>{
    console.log(e)
	console.log("Not able to connect");
})
const filecontent = fs.readFileSync('NLHC-3/frontend/register.html');

const server = http.createServer((req,res) => {

    res.writeHead(200 , {'content-type' : 'text/html'});
    if (req.url == '/'){
        res.end(filecontent);
    }
    else if (req.url == '/login'){
        fs.readFile('NLHC-3/frontend/loginh.html',(err,data) => {
            if (err) {
                res.end("error 404 : page not found");
            }
            else res.end(data);
        });
    }
    else if (req.url == '/register'){
        fs.readFile('NLHC-3/frontend/register.html',(err,data) => {
            if (err) {
                res.end("error 404 : page not found");
            }
            else res.end(data);
        });
    }else if (req.url == '/about')
    {
        fs.readFile('NLHC-3/frontend/index.html',(err,data) => {
            if (err) {
                res.end("error 404 : page not found");
            }
            else res.end(data);
        });
    }
    else {
        fs.readFile('NLHC-3/frontend/index.html',(err,data) => {
            if (err) {
                res.end("error 404 : page not found");
            }
            else res.end(data);
        });
    }
    
});
const port = process.env.PORT || 9000;
const hostname = '127.0.0.1';
server.listen(port, hostname, () => {
    console.log(`running at http://${hostname}:${port}/`);
});