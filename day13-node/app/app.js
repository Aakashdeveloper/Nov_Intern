var express = require('express');
var app = express(); //creating object so that we can use its method
var port = 9700;

//first route(default)
app.get('/',function(req,res){
    res.send("HI From first router  express")
});

//Second Route
app.get('/second',function(req,res){
    res.send("This is from second")
})

app.listen(port,function(err){
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
});