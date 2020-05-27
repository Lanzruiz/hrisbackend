var db = require('../util/db');



const create = (data) => {

   // db.query(`INSERT INTO person (firstname, lastname, middlename, contact, email, dateofbirth, address)  VALUES ?`,[data], function (error, results) {
   //     if (error) throw error;
   //     callback({result: 'success'});
   // });
    
    return new Promise(function (resolve, reject){
        //readFile(filename, 'utf8').done(function (res){
          db.create(data, function (error, results, fields) {
            try {
                resolve(results);
            } catch(error) {
                reject(error)
            }
        
        })
         
    });
}


module.exports = create;