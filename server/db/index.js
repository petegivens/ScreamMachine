const { Pool } = require('pg')

var config = {
  host: 'localhost',
  user: 'screamer',
  // password: '',
  database: 'scream'
};

const pool = new Pool(config)

module.exports = {
  query: function (text, params, callback) {
    // console.log('db.query, text: ', text);
    // console.log('db.query, params: ', params);


    return pool.query("select * from users")
      .then(function(result) {
        return result.rows;
      });
  },

  qTest: function() {
    return 'text from db file';
  },

  loggerTest: function(req, res, next) {
    console.log('hello world from my db indexjs loggerTest middleware!');
    next();
  }
}
