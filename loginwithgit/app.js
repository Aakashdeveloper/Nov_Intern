const express = require('express');
const app = express();
const superagent = require('superagent');
const request = require('request');
const port = 6700;
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors())

app.post('/users',(req,res) => {
    console.log("<<<<",req.body)
    superagent
    .post('https://github.com/login/oauth/access_token')
    .send({
        client_secret:'13551afb555843b63814821bf8f9ebe41ac35c00',
        client_id:'c5252063185c8cd11328',
        code:req.body.code
    })
    .set('Accept','application/json')
    .end((err,result) => {
        if(err) throw err;
        var accesstoken = result.body.access_token
        const option = {
            url:'https://api.github.com/user',
            method:'GET',
            headers:{
                'Accept':'application/json',
                'Authorization':'token '+accesstoken,
                'User-Agent':'sep-node'
            }
        }
        var output;
        request(option,(err,response,body) => {
            output = body;
            console.log(output)
            return res.send(output)
        })
    })
})

app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})

