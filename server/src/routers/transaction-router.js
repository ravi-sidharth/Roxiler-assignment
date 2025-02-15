const express = require('express')
const allTransaction = require('../controllers/transaction-controller')
const router = express.Router()

router.get('/transactions',allTransaction)

module.exports = router 