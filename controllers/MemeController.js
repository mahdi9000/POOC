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
    res.render("memes/addForm")
  }
  static addMeme(req, res) {
    const newMeme = {
      title: req.body.title,
      author: req.session.username,
      image_url: req.body.image_url,
      UserId: req.session.userId
    }

    // console.log(newMeme);
    Meme.create(newMeme)
      .then(data => {
        res.redirect("/memes")
        // res.send(data)
      })
      .catch((err) => {
        res.send(err);
      });
      
  }

  static editFormMeme(req, res){
    let id = +req.params.id
    let editdata = []

    Meme.findByPk(id)
    .then((data)=>{
      editdata.push(data)
    })
    .then((data2)=>{
      // res.send(data2)
      res.render("memes/editForm",{editdata, data2})
    })
    .catch((err)=>{
      res.send(err)
    })
  }

  static editMeme(req, res){
    const editdata ={
      title: req.body.title,
      author: req.body.author,
      image_url: req.body.image_url,
      UserId: +req.body.UserId
    }

    Meme.update(editdata,{  
      where:{
        id: +req.params.id
      }
    })
    .then(data=>{
      res.redirect('/memes')
    })
    .catch(err =>{
      res.send(err)
    })

  }

  static deleteMeme(req, res){
    let id = +req.params.id

    Meme.destroy({
      where:{
        id:id
      }
    })
    .then((data) => {
      res.redirect('/memes')
   })
   .catch((err) => {
      res.send(err)
   })
  }
}

module.exports = MemeController