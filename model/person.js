var db = require('../util/db');



const create = (data, callback) => {

    db.query(`INSERT INTO person (firstname, lastname, middlename, contact, email, dateofbirth, address)  VALUES ?`,[data], function (error, results) {
        if (error) throw error;
        callback({result: 'success'});
    });
}


module.exports = create;