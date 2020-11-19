const router = require('express').Router()
const controllermeme = require('../controllers/MemeController')

router.get('/', controllermeme.getAllMemes)

module.exports = router