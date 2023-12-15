const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        required:[true,'must provide a name'],
        type:String,
        trim:true,
        maxLength:[30,'Name must not be more than 30 characters']
    },
    completed:{
        default:false,
        type:Boolean
    }
})

module.exports = mongoose.model('Task',TaskSchema)