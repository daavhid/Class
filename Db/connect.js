const mongoose = require('mongoose')


const connectDb = (url)=>{
   return mongoose.connect(url)
        .then(()=>{
            console.log('CONNECTED TO DB...')
        })
        .catch((err)=>{
            console.log(err)
        })
}


module.exports =  connectDb
