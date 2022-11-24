const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const db=require('./config/mongoose');
const port=8000;

const app=express();

app.set('view engine','ejs');
app.set("views",path.join(__dirname,"views"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('assets'));

app.get('/',function(req,res){
    res.render("home",{
        message:"Working Fine",
        title:"To Do App",
    });
});

app.listen(port,function(err){
    if(err){
        console.log("Error in starting app",err);
    }
    else{
        console.log("App started Successfully");
    }
});