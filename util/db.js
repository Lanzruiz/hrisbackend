require('dotenv').config();
var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER,
  password        : process.env.DB_PASSWORD,
  database        : process.env.DB_NAME
});
 

const create = (data) => {

    // pool.query(`INSERT INTO person (firstname, lastname, middlename, contact, email, dateofbirth, address)  VALUES ?`,[data], function (error, results) {
    //    if (error) throw error;
    //    callback({result: 'success'});
   // });

   return new Promise((resolve, reject) => {
        var query = connection.query('INSERT INTO users SET ?', data, function (error, results, fields) {
            try {
                resolve(data);
            } catch(error) {
                reject(error)
            }
        
        });
   });

}


module.exports = pool;