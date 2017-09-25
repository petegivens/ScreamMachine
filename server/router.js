var express = require('express');
var logger = require('morgan');
var db = require(__dirname + '/db/index');



var app = express();

app.use(logger('dev'));

app.use('/', express.static('client'));

app.get('/getUsers', function(req, res) {
	db.getUsers()
		.then(function(result) {
			res.send(result);
		})
		.catch(function(error) {
			res.send('Error getting users.');
		});
});

app.get('/login', function(req, res) {
  body = {
    username: 'luig0',
    password: 'pass1234'
    // password: 'wrongpass'
  };

  db.findUser(body)
    .then(function(result) {
      if(result.length > 0) {
        return result[0]; // if multiple entries exist for username, use the first. this can only happen by manual entries
      } else {
        res.send('User not found');
      }
    })
    .catch(function(err) {
      res.send(err);
    })
    .then(function(user) {
      // call a function from db that checks password
      db.isCorrectPassword(body)
        .then(function(isMatch) {
          if(isMatch) {
            res.cookie('username', body.username);
            res.cookie('isLoggedIn', true);
            res.send('password is correct');
          } else {
            res.cookie('username', null);
            res.cookie('isLoggedIn', false);
            res.send('password is incorrect');
          }
        });
    });
});

app.get('/addUser', function(req, res) {
  // var user = {
  //   username: 'longhorns',
  //   password: 'hashme',
  //   first_name: 'go horns',
  //   last_name: 'beat OU'
  // };

  var user = {
    username: 'luig0',
    password: 'pass1234',
    first_name: 'luig0_first',
    last_name: 'luig0_last'
  };

  db.findUser(user)
    .then(function(result) {
      console.log('router.js, findUser result: ', result.length);
      if(result.length > 0) {
        res.send('User already exists in db');
      } else {
        db.addUser(user)
          .then(function(result) {
            console.log('returned to router.js db.addUser; result: ', result);
            res.send('User added');
          })
          .catch(function (error) {
            res.send('addUser catch: ', error);
          });
      }
    })
    .catch(function(error) {
      res.send('findUser catch: ' + error);
    })
});

app.get('/profile', function(req, res) {
  res.send('Welcome to the profile endpoint');
});

module.exports = app;