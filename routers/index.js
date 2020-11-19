const router = require('express').Router()
const UserRouter = require('./userRouter')
const memeRouter = require('./memeRouter')

router.get('/',(req, res) => {
  res.redirect('/users/login')
})
// (req, res) => {
//   res.send({
//     msg: 'Yo whatsapp'
//   })
// })
router.use('/users', UserRouter)
router.use('/memes', memeRouter)

module.exports = router