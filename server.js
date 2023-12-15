
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const tasks = require('./routes/tasks')
const connectDb = require('./Db/connect')
const cors = require('cors')
require('dotenv').config()

PORT = 3000


app.use(cors())
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:5173"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });


app.get('/Home',(req,res)=>{
    
    req.use = {
        name:'David',
        id:300
    }
    res.send(req.use)
})
app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))
app.use('/api/v1/tasks',tasks)



const start =async ()=>{
    try{
        await connectDb(process.env.MONGO_URI)
        app.listen(PORT,()=>{
            console.log(`The server is running on Port ${PORT} `)
        })
    }catch(err){
        console.log(err)
    }
   

}

start()

