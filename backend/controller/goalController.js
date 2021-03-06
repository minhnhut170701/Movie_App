const Goal = require('../model/goalModel')
const User = require('../model/userModel')
const mongoose = require('mongoose')
const asyncHandler = require("express-async-handler")

const getGoals = asyncHandler(async (req, res) =>{
    const goals = await Goal.find({user: req.user.id})

    res.status(200).json(goals)
})

const searchGoals = asyncHandler(async (req, res) =>{
    let data = await Goal.find({
        "$or":[
            {title:{$regex: req.params.key}}
        ]
    })
    res.send(data)
})


//@  SET goal
//@ route POST /api/goals
//@ access Prive
const setGoals = asyncHandler(async (req, res) =>{
    if(!req.body){
        res.status(400)
        throw new Error("please add a text field")
    }
    const goal = await Goal.create({
        title: req.body.title,
        imageSmall: req.body.imageSmall,
        imageLarge: req.body.imageLarge,
        description: req.body.description,
        rate: req.body.rate,
        category: req.body.category,
        categoryforDev: req.body.categoryforDev,
        ep: req.body.ep,
        url: req.body.url
    })
    res.status(200).json(goal)
})
//@  SET goal Comment
//@ route POST /api/goal/:id
//@ access Prive
const setGoalsComment = asyncHandler(async(req,res) =>{
    const {name, comment, rate} = req.body

    const movie = await Goal.findById(req.params.id)
    if(!movie){
        res.status(400)
        throw new Error("Goal not found")
    }

    var id = mongoose.Types.ObjectId(req.params.id.trim());
    
    if(!req.body){
        res.status(400)
        throw new Error("please add a text field")
    }

    const goal = await Goal.updateOne({_id: id}, 
    {$push:{comment: {
        name: name, 
        comment: comment,
        rate: rate,
        time: new Date().toLocaleDateString('en-us', 
        { weekday:"long", year:"numeric", month:"short", day:"numeric"})
    }}})

    res.status(200).json(goal)
})

//@  SET goal
//@ route PUT /api/goal/:id
//@ access Prive
const updateGoal = asyncHandler(async(req, res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }

    //check for user
    if(req.user.id){
        res.status(401)
        throw new Error("user not found")
    }

    //make sure the logged in user matches the goals
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error("user not authorized")
    }

    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{
        new:true
    })

    res.status(200).json(updateGoal)
})
//@  Delete goal
//@ route Delete /api/goal/:id
//@ access Prive
const deleteGoals = asyncHandler(async(req, res) =>{
    const goal = await Goal.findById(req.params.id)
    if(!goal){
        res.status(400)
        throw new Error("Goal not found")
    }

    if(req.user.id){
        res.status(401)
        throw new Error("User not found")
    }

    //make sure the logged in user matches the goals
    if(goal.user.toString() !== req.user.id){
        res.status(401)
        throw new Error("user not authorized")
    }
    
    await goal.remove()
    res.status(200).json({id: req.params.id})
})

module.exports = {
    getGoals,
    setGoals,
    updateGoal,
    deleteGoals,
    searchGoals,
    setGoalsComment
}