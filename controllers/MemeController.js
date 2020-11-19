const {Meme, Like} = require('../database/models')

class MemeController {
  static getAllMemes(req, res) {
    Meme.findAll()
      .then((data) => {
        // res.send(data)
        res.render("memes/showmemes", {data})
      })
      .catch((err) => {
        res.send(err)
      });
  }

  static addMemeForm(req, res){
    res.render("memes/createForm")
  }
  static addMeme(req, res) {
    const newMeme = {
      title: req.body.title,
      category: req.body.category,
      meme_url: req.body.meme_url
    }

    Meme.create(newMeme)
      .then((data) => {
        // res.redirect('/')
        console.log(data);
      }).catch((err) => {
        console.log(err);
      });
  }

  static editMeme(req, res){

  }

  static deleteMeme(req, res){
    
  }
}

module.exports = MemeController