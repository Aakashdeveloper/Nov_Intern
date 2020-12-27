var http = require('http');

var server = http.createServer(function(req,res){
    res.write('Welcome to Node application Server');
    res.end();
});

server.listen(9800);


//http://127.0.0.1:9800/
//localhost:9800
