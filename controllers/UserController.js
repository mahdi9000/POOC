const {User} = require('../database/models')
const {verifyHash} = require('../helpers/bcrypt')

class UserController {

  static registerForm(req, res){
    res.render("users/register")
  }

  static register(req, res) {
    const newUser = {
      username: req.body.username,
      password: req.body.password
    }

    User.create(newUser)
      .then((data) => {
        res.send(data)
        // res.redirect('/users/login')
        // console.log(data);
      })
      .catch((err) => {
        if(err.name == 'SequelizeValidationError') {
          res.send(err.message)
        } else {
          res.send(err)
        }
      });
  }

  static login(req, res) {
    const userLogin = {
      username: req.body.username,
      password: req.body.password
    }

    User.findOne({
      where: {
        username: userLogin.username
      }
    })
      .then((user) => {
        if(!user) {
          res.send('Wrong username/password')
        } else {
          if(!verifyHash(userLogin.password, user.password)) {
            res.send('Wrong username/password')
          } else {
            req.session.UserId = User.id
            req.session.username = user.username;
            // res.redirect('/')
            res.send('oke login')
          }
        }
      })
      .catch((err)=>{
        res.send(err)
      })
  }
static logout(req, res){
  req.session.destroy((err)=>{
    if(err){
      res.send(err)
    } else {
      //res.redirect('/login')
      res.send('logout')
    }
  })
}

}

module.exports = UserController