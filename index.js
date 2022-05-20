const http = require('http');
const hostname = '127.0.0.1'; //endereço do servidor
const port = 3000; //porta do servidor

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Olá, mundo!');
});

server.listen(port,hostname, () => {
    console.log(`SERVIDOR RODANDO EM HTTP://${hostname}:${port}/`);
})
