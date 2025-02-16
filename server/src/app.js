require('dotenv').config()
const express = require('express')
const cors = require('cors')
const connectToMongoDB = require('./db/connectToMongoDB')
const productRouter = require('./routers/product-router')
const allTransactionRouter = require('./routers/transaction-router')
const statisticsRouter = require('./routers/statistics-router')
const uniqueCategoryRouter = require('./routers/pieChart-router')
const combinedDataRouter = require('./routers/combined-router')
const barChartRouter = require('./routers/barChart-router')

const app = express()
const port = process.env.PORT || 3000 

// middlewares 
app.use(express.json())
app.use(cors())

// database connection
connectToMongoDB()

// api 
app.use('/api',productRouter)
app.use('/api',allTransactionRouter)
app.use('/api',statisticsRouter)
app.use('/api',uniqueCategoryRouter)
app.use('/api',combinedDataRouter)
app.use('/api',barChartRouter)


app.listen(port,()=> console.log(`Server Started at http://localhost:${port}`))