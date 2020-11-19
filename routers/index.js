const router = require('express').Router()
const UserRouter = require('./userRouter')
const memeRouter = require('./memeRouter')
const controllermeme = require('../controllers/MemeController')

router.get('/', controllermeme.getAllMemes)
// (req, res) => {
//   res.send({
//     msg: 'Yo whatsapp'
//   })
// })
router.use('/users', UserRouter)
router.use('/memes',memeRouter)

module.exports = router