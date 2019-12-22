const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true
    }
}, {
    timestamps:true
})
//trim para eliminar espacios de mas

module.exports= model('User',userSchema)