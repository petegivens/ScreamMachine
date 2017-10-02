var bcrypt = require('bcrypt');
const saltRounds = 5;

const { Pool } = require('pg');

// [ config ] is a settings switcher for Postgres; we were at one
//    point running local and online copies of Postgres and needed
//    to be able to easily switch between them

var config = {
  aws: {
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'scream'
  },
  jc_offline: {
    host: 'localhost',
    user: 'postgres',
    password: 'admin',
    database: 'scream'
  },
  jc_aws: {
    host: 'ec2-34-229-151-217.compute-1.amazonaws.com',
    user: 'postgres',
    password: 'admin',
    database: 'scream'
  }
};

// Use the following line to choose your Postgres config from above:

const pool = new Pool(config['aws']);

// Following functions are mostly split by GETTERS and SETTERS
//  Exceptions are: [ clearScreams, findUser, isCorrectPassword ]
//  - clearScreams was used during development of Profile page
//  - findUser, isCorrectPassword are used in authentication
//  Getters are used to make database tables available to front end devs
//
//  Differences between plural and singular methods:
//  - getScreams gets everything from the [ screams ] table for all users
//  - getScream requires a user to be specified and only returns data for that user
//  - getForm(s), getAverage(s) follow the same convention

module.exports = {
  getUsers: function () {
    return pool.query("select username, first_name, last_name from users")
      .then(function(result) {
        return result.rows;
      })
      .catch(function(err) {
        console.log('query fail');
        return err;
      });
  },

  getScreams: function() {
    return pool.query("select * from screams")
      .then(function(result) {
        return result.rows;
      })
      .catch(function(error) {
        return err;
      })
  },

  getScream: function(username){
    var query = 'SELECT * FROM screams WHERE user_id = (SELECT id FROM users WHERE username=$1)';
    return pool.query(query,[username])
      .then(function(result) {
        return result.rows;
      })
      .catch(function(error) {
        return error; 
      })
  },

  getForms: function() {
    return pool.query("SELECT * from form")
      .then(function(result) {
        return result.rows;
      })
      .catch(function(error) {
        return error;
      })
  },

  getForm: function(username) {
    var query = 'SELECT * FROM forms WHERE user_id = (SELECT id FROM users WHERE username=$1)';
    return pool.query(query,[username])
      .then(function(result) {
        return result.rows;
      })
      .catch(function(error) {
        return error; 
      })  
  },

  getAverages: function() {
    return pool.query("select * from averages")
      .then(function(result) {
        return result.rows;
      })
      .catch(function(error) {
        return error;
      })
  },

  getAverage: function(username) {
    var query = 'SELECT * FROM averages WHERE user_id = (SELECT id FROM users WHERE username=$1)';
    return pool.query(query,[username])
      .then(function(result) {
        return result.rows[0];
      })
      .catch(function(error) {
        return error; 
      })  
  },

  clearScreams: function() {
    return pool.query("delete from screams where id > 0")
      .then(function(result) {
        return result.rows;
      })
      .catch(function(error) {
        return error;
      })
  },

  findUser: function(user) {
    return pool.query("SELECT username FROM users WHERE username = '" + user.username + "'")
      .then(function(result) {
        return result.rows;
      })
      .catch(function(err) {
        return err;
      });
  },

  addUser: function(user) {
    /* user should be an object of the following structure:
     *  {
     *    username: 'username',
     *    password: 'password',
     *    first_name: 'first_name',
     *    last_name: 'last_name'
     *  }
     */

     return bcrypt.hash(user.password, saltRounds)
      .then(function(hash) {
        user.password = hash;

        let rayedUser = [
          user.username,
          user.password,
          user.first_name,
          user.last_name
        ];

        let query = {
          text: 'INSERT INTO users(username, password, first_name, last_name) VALUES($1, $2, $3, $4)',
          values: rayedUser
        };

        return pool.query(query)
          .then(function(result) {
            console.log('db.index.js, succcess: ', result.rows);
            return result.rows;
          })
          .catch(function(err) {
            console.log('db error: ', err);
            return err;
          });
      })
      .catch(function(err) {
        console.log('bcrypt hash error: ', err);
        return err;
      });
  },

  isCorrectPassword: function(user) {
    // Assumes that you first check if user exists before running this function

    return pool.query("SELECT password FROM users WHERE username = '" + user.username + "'")
      .then(function(result) {
        return bcrypt.compare(user.password, result.rows[0].password)
          .then(function(isMatch) {
            return isMatch;
          });
      });
  },

  addScream: function(data) {
    // add a scream to database
    /* data should be an object of the following structure:
     *  {
     *    username: 'username',
     *    volume: 1.0000,
     *    lowFreq: 1.0000,
     *    midFreq: 1.0000,
     *    highFreq: 1.0000
     *  }
     */
    let query = {
      text: 'INSERT INTO screams (user_id, volume, lowFreq, midFreq, highFreq) VALUES ( (SELECT id FROM users WHERE username=$1), $2, $3, $4, $5);'
    };
    console.log('query.text: ', query.text);
    return pool.query(query,[data.username, data.volume, data.lowFreq, data.midFreq, data.highFreq])
      .then(function(result) {
        console.log('addScream query success');
        return result;
      })
      .catch(function(error) {
        console.log('addScream query fail');
        return error;
      });
  },

  addForm: function(data) {
    /*  
     *  data should be object of following structure: 
     *  {
     *    username: 'username',
     *    stress_level: 0,
     *    stressors: 'stressors'
     *  }
     *
     */
     let query = {
        text: 'INSERT INTO form (user_id, stress_level, stressors) VALUES ( (SELECT id FROM users WHERE username=$1), $2, $3);' 
     }
     return pool.query(query,[data.username, data.stress_level, data.stressors])
      .then(function(result) {
        return result;
      })
      .catch(function(error) {
        console.log(error);
        return error;
      });
  },

  addAverages: function(data) {
    /*  
     *  data should be object of following structure: 
     *  {
     *    username: 'username',
     *    stress_level: 0,
     *    form_data: 'form_data'
     *  }
     *
     */
    console.log(data);
    if (data.isFirst) {
      var query = {
        text: 'INSERT INTO averages (user_id, stress_level, form_data) VALUES ( (SELECT id from users WHERE username=$3), $1, $2)'
      }
    } else {
      var query = {
        text: 'UPDATE averages SET stress_level = $1, form_data = $2 WHERE user_id = (SELECT id FROM users WHERE username=$3);'
     }
    }
     return pool.query(query,[data.stress_level, data.form_data, data.username]);
  }
}