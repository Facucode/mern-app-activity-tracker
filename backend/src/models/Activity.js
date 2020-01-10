const {Schema, model} = require('mongoose')

const activitySchema = new Schema({
    title: String,
    description:String,
    time:Date,
    startDay:Date,
    days:Number,
    priority:String
})

module.exports=model('Activity',activitySchema)