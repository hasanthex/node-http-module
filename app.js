const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/about'){
        res.write('This is about content');
        res.end();
    }
});

server.listen(3000);

console.log('Run Server....');
