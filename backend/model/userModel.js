const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    name:{
        type: String,
        require: [true, 'Please Add name']
    },
    email:{
        type: String,
        require: [true, 'Please Add Email'],
        unique: true,
    },
    password:{
        type: String,
        require: [true, 'Please Add password']
    },
    
},{
    timestamps: true
})

module.exports = mongoose.model('User', userSchema)