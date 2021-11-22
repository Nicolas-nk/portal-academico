var express = require('express');
var router = express.Router();

const passport = require('passport');

/* GET home page. */
router.get('/', function(req, res, next) {
    if(req.query.fail)
  res.render('login', {message: 'Usuário e/ou senha inválidos'});
  else
  res.render('login', {message: 'null'});
});


router.post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login?fail=true'
}));

module.exports = router;