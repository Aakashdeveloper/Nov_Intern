const express = require('express');
const app = express();
const port = 9900;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongourl = "mongodb://localhost:27017";
let db;

//health Check
app.get('/abc',(req,res) => {
    res.send("Health Ok");
});

//city Route
app.get('/city',(req,res) => {
    db.collection('city').find().toArray((err,result) => {
      if(err) throw err;
      res.send(result);
    })
   
});

//rest per city
app.get('/rest/:id/:abc',(req,res) =>{
  var id = req.params.id
  var abc = req.params.abc
  db.collection('restaurent').find({city_name:id}).toArray((err,result) => {
    if(err) throw err;
    res.send(result)
  })
})

//Rest route
app.get('/rest',(req,res) => {
  db.collection('restaurent').find().toArray((err,result)=>{
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

//connection with mongo serer
MongoClient.connect(mongourl,(err,connection) => {
  if(err) console.log(err);
  db = connection.db('edunov');

  app.listen(port,(err) => {
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
  })

})
