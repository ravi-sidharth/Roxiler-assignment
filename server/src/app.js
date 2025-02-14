require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectToMongoDB = require('./db/connectToMongoDB')

const app = express()
const port = process.env.PORT || 3000 

// middlewares 
app.use(express.json())
app.use(cors())

// database connection
connectToMongoDB()

app.listen(port,()=> console.log(`Server Started at http://localhost:${port}`))