const router = require('express').Router()
const UserRouter = require('./userRouter')
const memeRouter = require('./memeRouter')
const UserController = require('../controllers/UserController')

router.get('/', UserController.registerForm)
// (req, res) => {
//   res.send({
//     msg: 'Yo whatsapp'
//   })
// })
router.use('/users', UserRouter)
router.use('/memes', memeRouter)

module.exports = router