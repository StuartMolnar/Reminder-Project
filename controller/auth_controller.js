let database = require("../database");
const express = require("express");
const app = express();

const cookieSession = require('cookie-session');

//put in index.js
app.use(cookieSession({
	name: 'session',
	keys: ['aaa', 'bbb', 'ccc'],
  maxAge: 10*24*3600*1000
}));

app.use(function(req, res, next) {
  if(req.session.user) {
    if (users[req.session.user]) {
      req.user = users[req.session.user];
      next();
    }
  } else {
    next();
  }
})
//--

let authController = {
  login: (req, res) => {
    res.render('auth/login')
  },

  register: (req, res) => {
    res.render('auth/register', {email: req.query.email});
  },

  loginSubmit: (req, res) => {
    if (database[req.body.email] && database[req.body.email].password === req.body.password) {
      /*
      req.session = {};
      req.session['user']= req.body.email;
      */
      res.redirect('/reminders');
    } else {
      res.redirect('/');
    }
  },

  registerSubmit: (req, res) => {
    console.log(req.body);
  }
}

module.exports = authController;
