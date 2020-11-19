const router = require('express').Router()
const controllermeme = require('../controllers/MemeController')

router.get('/', controllermeme.getAllMemes)

router.get('/add', controllermeme.addMemeForm)
router.post('/add', controllermeme.addMeme)

router.get('/edit/:id',controllermeme.editFormMeme)
router.post('/edit/:id', controllermeme.editMeme)

router.get('/delete/:id', controllermeme.deleteMeme)

module.exports = router