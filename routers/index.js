const router = require('express').Router()
const UserRouter = require('./userRouter')

router.get('/', (req, res) => {
  res.send({
    msg: 'Yo whatsapp'
  })
})
router.use('/users', UserRouter)
// router.use('/memes')

module.exports = router