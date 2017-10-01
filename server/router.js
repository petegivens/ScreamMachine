var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var db = require(__dirname + '/db/index');

const cookieParser = require('cookie-parser');
const session = require('express-session');


var app = express();

app.use(logger('dev'));
app.use(bodyParser());

app.use(cookieParser());
app.use(session({secret: 'screaming'}));

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

app.get('/getScreams', function(req, res) {
  db.getScreams()
    .then(function(result) {
      res.send(result);
    });
});

app.get('/getScream', function(req, res) {
  db.getScream(req.session.username)
    .then(function(result) {
      res.send(result);
    })
}); 

app.get('/getForms', function(req, res) {
  db.getForms()
    .then(function(result) {
      res.send(result);
    })
});

app.get('/getForm', function(req, res) {
  db.getForm(req.session.username)
    .then(function(result) {
      res.send(result);
    })
});

app.get('/getAverages', function(req, res) {
  db.getAverages()
    .then(function(result) {
      res.send(result);
    })
})

app.get('/getAverage', function(req, res) {
  // need to changed to use sessions
 
  db.getAverage(req.session.username)
    .then(function(result) {
      res.send(result);
    })
});

app.get('/clearScreams', function(req, res) {
  db.clearScreams()
    .then(function(result) {
      res.send(result);
    })
});

app.post('/login', function(req, res) {
  db.findUser(req.body)
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
      db.isCorrectPassword(req.body)
        .then(function(isMatch) {
          if(isMatch) {
            res.cookie('username', req.body.username);
            res.cookie('isLoggedIn', true);
            req.session.isLoggedIn = true;
            req.session.username = req.body.username;
            res.send('Password is correct; cookie established');
            //Adding session info below to test
          } else {
            res.cookie('username', null);
            res.cookie('isLoggedIn', false);
            //adding session info below to test
            //will check user state with presence of a session ID instead of checking username;
            req.session.destroy();
            res.send('password is incorrect');
          }
        });
    });
});

app.post('/addUser', function(req, res) {
  // JRJR pass = 'jrpass'
  // luig0 pass = 'pass1234'
  // longhorns pass = 'hashme'

  console.log('/addUser, req.body: ', req.body);

  var user = req.body;

  db.findUser(user)
    .then(function(result) {
      if(result.length > 0) {
        res.send('User already exists in db');
      } else {
        db.addUser(user)
          .then(function(result) {
            res.cookie('username', user.username);
            res.cookie('isLoggedIn', true);
            //Adding session method for testing
            req.session.username = user.username;
            req.session.isLoggedIn = true;
            res.send('User added');
          })
          .catch(function (error) {
            res.send('addUser catch: ', error);
          });
      }
    })
    .catch(function(error) {
      res.send('findUser catch: ' + error);
    });
});

app.post('/addScream', function(req, res) {
  // need to require logged in cookie

  var screamData = req.body.params;
  console.log('router.js, req.body: ', req.body.params);

  db.addScream(screamData)
    .then(function(result) {
      console.log('addScream method success');
      res.send('Successfully added scream data');
    })
    .catch(function(error) {
      console.log('addScream method failure');
      res.send('Failed to add scream');
    });
});

app.post('/addForm', function(req, res) {

  var formData = req.body.params;
  console.log(formData);
  db.addForm(formData)
    .then(function(result) {
      res.send('Successfully add form data');
    })
    .catch(function(error) {
      console.log('add Form method failed');
      res.send('failed to add form');
    });
});

app.post('/addAverages', function(req, res) {
  // post averages
  db.addAverages(req.body.params)
    .then(function(result) {
      res.send(result);
    })
})

app.get('/profile', function(req, res) {
  res.send('Welcome to the profile endpoint');
});

module.exports = app;
