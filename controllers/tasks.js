const Task = require("../models/Tasks")

const getTasks = async(req,res)=>{
       try{
        const tasks = await Task.find({})
        res.status(200).json({tasks})
       }catch(err){

       }
}

const createTask = async (req,res)=>{
    try{
        const task = await Task.create(req.body)
        res.status(201).json({task})
    }catch(err){
        res.status(500).json({msg:err})
    }
}

const getTask = async(req,res)=>{
    const {id:taskId} = req.params
    try{
        const task = await Task.findOne({_id:taskId})
        
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskId}`})
        }
        res.status(200).json({task})
    }catch(err){
        res.status(500).json({msg:err})
    }
}

const deleteTask = async(req,res)=>{
    try{
        const {id:taskId} = req.params
        const task = await Task.findOneAndDelete({_id:taskId})
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskId}`})
        }
        res.status(200).json({task:null,status:'success'}) 
    }catch(err){
        res.status(500).json({msg:err})
    }
}

const updateTask =async (req,res)=>{ 
    try{
        const {id:taskId} = req.params
        const task = await Task.findOneAndUpdate({_id:taskId},req.body)
        if(!task){
            return res.status(404).json({msg:`No task with id : ${taskId}`})
        }
        res.status(200).json({task}) 
    }catch(err){
        res.status(500).json({msg:err})
    }
}

 

module.exports = {
    getTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}