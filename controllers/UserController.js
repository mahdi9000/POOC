const {
  User
} = require('../database/models')
const {
  verifyHash
} = require('../helpers/bcrypt')

class UserController {

  static registerForm(req, res) {
    res.render('users/register')
  }

  static register(req, res) {
    const newUser = {
      username: req.body.username,
      password: req.body.password,
    }

    // NOTE: validasi unique username masih bocor di sequelize 
    // jadi nanti aku coba pake helper aja

    User.create(newUser)
      .then((data) => {
        res.redirect('/users/login')
      })
      .catch((err) => {
        if (err === 'SequelizeValidationError') {
          res.send(err.message)
        } else {
          res.send(err)
        }
      });
  }

  static loginForm(req, res) {
    res.render('users/login')
  }

  static login(req, res) {
    const username = req.body.username
    const password = req.body.password
    // compareHash(password, userData.password)
    User.findOne({
        where: {
          username: username
        }
      })
      .then(user => {
        if (!user) {
          res.send('Wrong username/password')
        } else if (!verifyHash(req.body.password, user.password)) {
          res.send('Wrong username/password')
        } else {
          req.session.userId = user.id;
          req.session.username = user.username;
          // res.status(200).json(req.ression)userName
          res.redirect('/memes');
        }
      })
      .catch((err) => {
        res.send(err)
      })
  }

}

module.exports = UserController