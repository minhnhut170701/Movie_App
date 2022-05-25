const mongoose = require('mongoose');


const commentSchema = mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    rate:{
        type: Number,
        require: true,
    },
    comment:{
        type: String,
        require: true,
    },
},{
    timestamps: true
})

module.exports = mongoose.model('Comment', commentSchema)