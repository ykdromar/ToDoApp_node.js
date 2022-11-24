const express=require('express');
const path=require('path');
const bodyParser=require('body-parser');
const db=require('./config/mongoose');
const Task=require('./model/task');
const port=8000;

const app=express();

app.set('view engine','ejs');
app.set("views",path.join(__dirname,"views"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('assets'));


app.get('/',function(req,res){
    Task.find({},function(err,tasks){
        if(err){
            console.log("Error in loading tasks");
            return;
        }
        return res.render("home",{
            heading:"To Do App",
            title:"To Do App",
            tasks:tasks,
        });
    });
    
});

app.post('/delete',function(req,res){
    let body=req.body;
    let keys=Object.keys(body);
    Task.deleteMany({_id:{$in:keys}},function(err){
        if(err){
            console.log("Error in deleting Tasks",err);
            return;
        }
    });
    return res.redirect('back');

});

app.post('/create-task',function(req,res){
    Task.create({
        desc:req.body.desc,
        due:req.body.due,
        tag:req.body.tag,
    },function(err){
        if(err){
            console.log("Error in adding Task",err);
        }else{
            console.log("Task added successfully");

        }
        return res.redirect('back');

    });
})

app.listen(port,function(err){
    if(err){
        console.log("Error in starting app",err);
    }
    else{
        console.log("App started Successfully");
    }
});