const fs = require('fs');
const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true}));
const activites = require("./activitiex.json");


app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})


app.post("/autumn", function(req, res){
   fs.writeFile(__dirname + "/data.txt",req.body.activity,function(){
    console.log("Listening on localhost port 5050")
   });
   activites[0].activity = req.body.activity;

   res.send(activites)
})

app.post("/update", function(req, res){
    
    activites[0].activity = req.body.updatedActivity;
    res.send(activites);
    
})
app.post("/delete", function(req, res){
   activites.splice(req.body.number,1);
   res.send(activites);
})


const port = process.env.PORT || 5000;

app.listen(port, function(){
    console.log(`Listening on ${port}`)
})