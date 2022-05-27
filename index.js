/*const http = require('http');
const hostname = '127.0.0.1'; //endereço do servidor
const port = 3000; //porta do servidor

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Olá, mundo!');
});

server.listen(port,hostname, () => {
    console.log(`SERVIDOR RODANDO EM HTTP://${hostname}:${port}/`);
})*/

const express=require('express');
const app=express();
const path=require('path');
const router=express.Router();
router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
})
router.get('/about',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html'));
})

app.use('/',router);
app.use('/about',router);
app.listen(process.env.port||3000);
console.log("Servidor rodando, graças a Deus!");