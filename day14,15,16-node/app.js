const express = require('express');
const app = express();
const port = process.env.PORT || 9900;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');

const mongourl = "mongodb+srv://dev:mongo123@cluster0.f8vmc.mongodb.net/edurekinternship?retryWrites=true&w=majority";
let db;

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())

//health Check
app.get('/',(req,res) => {
    res.send("Health Ok");
});

//city Route
app.get('/city',(req,res) => {
    let sortcondition = {city_name:1};
    let limit =100
    if(req.query.sort && req.query.limit ){
      sortcondition = {city_name:Number(req.query.sort)};
      limit =Number(req.query.limit)
    }
    else if(req.query.sort){
      sortcondition = {city_name:Number(req.query.sort)}
    }else if(req.query.limit){
      limit =Number(req.query.limit)
    }
    db.collection('city').find().sort(sortcondition).limit(limit).toArray((err,result) => {
      if(err) throw err;
      res.send(result);
    })
   
});

//rest per city
app.get('/rest/:id',(req,res) =>{
  var id = req.params.id
  db.collection('restaurent').find({_id:id}).toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

//Rest route
app.get('/rest',(req,res) => {
  var condition ={};
    //meal +cost
    if(req.query.mealtype && req.query.lcost && req.query.hcost){
      condition={$and:[{"type.mealtype":req.query.mealtype},{cost:{$lt:Number(req.query.hcost),$gt:Number(req.query.lcost)}}]}
    }
    //meal +city
    else if(req.query.mealtype && req.query.city){
      condition={$and:[{"type.mealtype":req.query.mealtype},{city:req.query.city}]}
    }
    //meal +cuisine
    else if(req.query.mealtype && req.query.cuisine){
      condition={$and:[{"type.mealtype":req.query.mealtype},{"Cuisine.cuisine":req.query.cuisine}]}
    }
    //meal
    else if(req.query.mealtype){
      condition={"type.mealtype":req.query.mealtype}
    }
    //city
    else if(req.query.city){
      condition={city:req.query.city}
    }
  db.collection('restaurent').find(condition).toArray((err,result)=>{
    if(err) throw err;
    res.send(result)
  }) 
})

//MealType Route
app.get('/meal',(req,res) => {
  db.collection('mealType').find().toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

//cuisine route
app.get('/cuisine',(req,res) => {
  db.collection('cuisine').find().toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

//placeorder
app.post('/placeorder',(req,res)=>{
  db.collection('orders').insert(req.body,(err,result) => {
    if(err) throw err;
    res.send('data added');
  })
})

//get all bookings
app.get('/orders',(req,res) => {
  db.collection('orders').find({}).toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

//connection with mongo serer
MongoClient.connect(mongourl,(err,connection) => {
  if(err) console.log(err);
  db = connection.db('edurekinternship');

  app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
  })

})
