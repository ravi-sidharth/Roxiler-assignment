const express = require('express')
const statisticsData = require('../controllers/statistics-controller')
const router = express.Router()

router.get('/statistics',statisticsData)

module.exports = router