// Load http module
const http = require('http');

// Create a server
const server = http.createServer((req, res)=>{
    // Taking url request.  
    if(req.url === '/'){
        res.write('Hello World');
        res.end();
    }
});

// Run Server
server.listen(3000);

console.log('Run Server....');
