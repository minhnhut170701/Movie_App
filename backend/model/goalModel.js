const mongoose = require('mongoose');

const goalSchema = mongoose.Schema({
    title:{
        type: String,
        require: true,
    },
    
    imageSmall:{
        type: String,
        require: true,
    },
    imageLarge:{
        type: String,
        require: true,
    },
    description:{
        type: String,
        require: true,
    },
    rate:{
        type: Number,
        require: true,
    },
    category:{
        type: String,
        require: true,
    },
    categoryforDev:{
        type: String,
        require: true,
    },
    ep:{
        type: Number,
        require: true,
    },
    url:{
        type: String,
        require: true,
    },
},{
    timestamp: true,
}
)

module.exports = mongoose.model('Goal', goalSchema)