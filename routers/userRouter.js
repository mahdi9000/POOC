const UserController = require('../controllers/UserController')

const router = require('express').Router()

router.get('/register', UserController.register)
router.get('/login', UserController.login)

module.exports = router