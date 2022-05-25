const express = require('express')
const router = express.Router();

const {getComment, setComment, updateComment, deteleComment} = require('../controller/commentController')

const {protect} = require('../middleware/authMiddleware')

router.route('/').get(protect,getComment).post(protect,setComment)
router.route('/:id').delete(protect,deteleComment).put(protect,updateComment)

module.exports =  router