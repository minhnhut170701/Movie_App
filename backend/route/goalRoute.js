const express = require('express');
const router = express.Router();

const {getGoals, setGoals, updateGoal, deleteGoals, searchGoals, setGoalsComment} = require('../controller/goalController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect,getGoals).post(protect,setGoals)
router.route('/search/:key').get(searchGoals)
router.route('/:id').delete(protect,deleteGoals).put(protect,updateGoal)
router.route('/:id').post(protect, setGoalsComment)
module.exports =  router