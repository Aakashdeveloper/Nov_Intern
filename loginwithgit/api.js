const express = require('express');
const app = express();
const request = require('request');
const superagent= require('superagent');
const port = 6700;
const cors = require('cors');

app.use(cors());

app.get('/',(req,res) => {
    res.send(
        "<a href='https://github.com/login/oauth/authorize?client_id=c5252063185c8cd11328'>Login With Github</a>"
        )
});


app.get('/users',(req,res) => {
    const code = req.query.code;
    if(!code){
        res.send({
            success:false,
            message:'Error on Code'
        })
    }
    superagent
        .post('https://github.com/login/oauth/access_token')
        .send({
            client_secret:'',
            client_id:'',
            code:code
        })
        .set('Accept','application/json')
        .end((err,result) => {
            if(err) throw err;
            var acctoken = result.body.access_token
            const option={
                url:'https://api.github.com/user',
                method:'GET',
                headers:{
                    'Accept':'application/json',
                    'Authorization':'token '+acctoken,
                    'User-Agent':'mycone'
                }
            }
            var output;
            request(option,(err,response,body) => {
                output = body;
                return res.send(output)
            })
        })
})



app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})