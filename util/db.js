
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'us-cdbr-iron-east-04.cleardb.net',
  user            : 'b34820f384d7bc',
  password        : '9c3ff224',
  database        : 'heroku_9ef7692f6447042'
});
 
 
module.exports = pool;