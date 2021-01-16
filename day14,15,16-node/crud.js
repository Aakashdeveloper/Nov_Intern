const express = require('express');
const app = express();
const port = process.env.PORT || 9800;
const mongo = require('mongodb');
const bodyParser = require('body-parser');
const MongoClient = mongo.MongoClient;
const cors = require('cors');
const mongourl ="mongodb+srv://dev:mongo123@cluster0.f8vmc.mongodb.net/novinternship?retryWrites=true&w=majority";
let db;
let col_name="users";

app.use(cors());
//encode data while insert 
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//health Check
app.get('/',(req,res) => {
    res.status(200).send("Health Ok")
});

//post
app.post('/addUser',(req,res) => {
    db.collection(col_name).insert(req.body,(err,result) => {
        if(err) throw err;
        res.status(200).send("Data Added")
    })
});

//get
app.get('/users',(req,res) => {
    var query = req.query.city
    if(req.query.city){
        query={city:req.query.city,isActive:true}
    }else{
        query={isActive:true}
    }
    db.collection(col_name).find(query).toArray((err,result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
})

//getUSer Details
//get
app.get('/users/:id',(req,res) => {
    var id = mongo.ObjectID(req.params.id)
    db.collection(col_name).find({_id:id,isActive:true}).toArray((err,result) => {
        if(err) throw err;
        res.status(200).send(result)
    })
})
//update user
app.put('/updateUser',(req,res) => {
    var id = mongo.ObjectID(req.body._id)
    db.collection(col_name).update(
        {_id:id},
        {
            $set:{
                name:req.body.name,
                city:req.body.city,
                phone:req.body.phone,
                role:req.body.role,
                isActive:true
            }
        },(err,result) => {
            if(err) throw err;
            res.status(200).send('Data Updated')
        }
    )
})

//delete user
//soft delete

app.put('/softDeleteUser',(req,res) => {
    var id = mongo.ObjectID(req.body._id)
    db.collection(col_name).update(
        {_id:id},
        {
            $set:{
                isActive:false
            }
        },(err,result) => {
            if(err) throw err;
            res.status(200).send('Data Updated')
        }
    )
});

//Reactive
app.put('/activateUser',(req,res) => {
    var id = mongo.ObjectID(req.body._id)
    db.collection(col_name).update(
        {_id:id},
        {
            $set:{
                isActive:true
            }
        },(err,result) => {
            if(err) throw err;
            res.status(200).send('Data Updated')
        }
    )
});

//hard delete
app.delete('/deleteUser',(req,res) => {
    var id = mongo.ObjectID(req.body._id)
    db.collection(col_name).remove({_id:id},(err,result)=>{
        if(err) throw err;
        res.status(200).send("Data Removed")
    })
})


//connection with mongo serer
MongoClient.connect(mongourl,(err,connection) => {
    if(err) console.log(err);
    db = connection.db('novinternship');
  
    app.listen(port,(err) => {
      if(err) throw err;
      console.log(`Server is running on port ${port}`)
    })
  
  })