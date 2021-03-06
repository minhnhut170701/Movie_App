const path = require("path")
const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/data')


connectDB()

const port = 3001

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(express.static('public'));



app.use('/api/goals', require('./route/goalRoute'))
app.use('/api/users', require('./route/userRoute'))
app.use('/api/comments', require('./route/commentRoute'))


if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,'../frontend/build')))

    app.get('*',(req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
}else{
    app.get('/', (req, res) => res.send('Please set production'))
}
app.use(errorHandler)

app.listen(process.env.PORT || port, () => console.log(`this server start on port ${port}`))