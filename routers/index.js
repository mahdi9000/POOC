const router = require('express').Router()
const UserRouter = require('./userRouter')
const memeRouter = require('./memeRouter')
const Controller = require('../controllers/Controller')

router.get('/', Controller.redir)
router.use('/users', UserRouter)
router.use('/memes', memeRouter)

module.exports = router