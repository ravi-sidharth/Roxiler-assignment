const express = require('express')
const initializeProduct = require('../controllers/initializeProduct-controller')
const router = express.Router()

router.get('/product-transaction',initializeProduct)


module.exports = router