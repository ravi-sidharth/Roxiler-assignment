const express = require('express')
const fetchCombinedData = require('../controllers/combined-controller')
const router = express.Router()

router.get('/combined-data',fetchCombinedData)

module.exports = router 
