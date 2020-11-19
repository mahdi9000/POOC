const UserController = require('../controllers/UserController')

const router = require('express').Router()

router.get('/register', UserController.registerForm)
router.post('/register', UserController.register)

router.get('/login', UserController.loginForm)
router.post('/login', UserController.login)

module.exports = router