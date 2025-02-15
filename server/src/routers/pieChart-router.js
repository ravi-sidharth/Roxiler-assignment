const express = require('express')
const fetchUniqueCategory = require('../controllers/pieChart-controller')
const router = express.Router()

router.get('/pie-chart',fetchUniqueCategory)

module.exports = router