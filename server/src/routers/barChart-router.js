const express = require('express')
const fetchPriceRangeItems = require('../controllers/barChart-controller')

const router = express.Router()

router.get('/bar-chart',fetchPriceRangeItems)

module.exports = router