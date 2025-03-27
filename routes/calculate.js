const express = require('express')
const router = express.Router()
const {calculateRes} = require('../controllers/calculateController')

router.post('/', calculateRes)

module.exports = router