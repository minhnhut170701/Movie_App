const Comment = require('../model/commentModel')

const asyncHandler = require("express-async-handler")

const getComment = asyncHandler(async (req, res) =>{
    const comment = await Comment.find()

    res.status(200).json(comment)
})

const setComment = asyncHandler(async (req, res) =>{
    if(!req.body){
        res.status(400)
        throw new Error("please add a text field")
    }
    const comment = await Comment.create({
        name: req.body.name,
        rate: req.body.rate,
        comment: req.body.comment
    })
    res.status(200).json(comment)
})

const updateComment = asyncHandler(async (req, res) =>{
    const comment = await Comment.findById(req.params.id)
    if(!comment){
        res.status(400)
        throw new Error("Goal not found")
    }

    //check for user
    if(req.user.id){
        res.status(401)
        throw new Error("user not found")
    }

    //make sure the logged in user matches the goals
    if(comment.user.toString() !== req.user.id){
        res.status(401)
        throw new Error("user not authorized")
    }

    const updateComment = await Comment.findByIdAndUpdate(req.params.id, req.body,{
        new:true
    })

    res.status(200).json(updateComment)
})

const deteleComment = asyncHandler( async(req, res) =>{
    const comment = await Goal.findById(req.params.id)
    if(!comment){
        res.status(400)
        throw new Error("Goal not found")
    }

    if(req.user.id){
        res.status(401)
        throw new Error("User not found")
    }

    //make sure the logged in user matches the goals
    if(comment.user.toString() !== req.user.id){
        res.status(401)
        throw new Error("user not authorized")
    }
    
    await comment.remove()
    res.status(200).json({id: req.params.id})
})



module.exports = {
   getComment,
   setComment,
   updateComment,
   deteleComment,
}


