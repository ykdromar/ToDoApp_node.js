const mongoose=require('mongoose');

const taskSchema=mongoose.Schema({
    desc:{
        type:String,
        required:true,
    },
    due:{
        type:String,
    },
    tag:{
        type:String,
    }
});

const Task=mongoose.model("Task",taskSchema);
module.exports=Task;