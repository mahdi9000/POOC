const router = require('express').Router()
const UserRouter = require('./userRouter')
const Controller = require('../controllers/Controller')

router.get('/', Controller.showHome)
router.use('/users', UserRouter)
// router.use('/memes')

module.exports = router