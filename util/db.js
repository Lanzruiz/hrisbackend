require('dotenv').config();
var mysql = require('mysql');
var connection = mysql.createPool({
  connectionLimit : 10,
  host            : process.env.DB_HOST,
  user            : process.env.DB_USER,
  password        : process.env.DB_PASSWORD,
  database        : process.env.DB_NAME
});
 

const create = (data, table) => {

   return new Promise((resolve, reject) => {
        var query = connection.query('INSERT INTO '+table+' SET ?', data, function (error, results, fields) {
            try {
                resolve(results);
            } catch(error) {
                reject(error)
            }
        
        });
   });

}


const remove = (data) => {

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


const search = (query, data, table) => {
    
    return new Promise((resolve, reject) => {
        connection.query("SELECT * FROM "+table+" WHERE "+query+" ?", [data], function (err, result) {
            //console.log(result);
            try {
                resolve(result);
            } catch(error) {
                reject(error)
            }
           
        });
    });
} 



const update = (query, data, table) => {

    return new Promise((resolve, reject) => {
         //"UPDATE customers SET address = 'Canyon 123' WHERE address = 'Valley 345'";
        var query = connection.query("UPDATE "+table+" SET "+data+" WHERE "+query, function (err, result) {
            console.log(result);
        });
    });
 
 }
 
 



module.exports = {
    create,
    update,
    remove,
    search
}