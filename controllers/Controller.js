class Controller {
  static redir (req, res) {
    res.redirect('/users/login')
  }
}

module.exports = Controller