var db = require('../util/db');


const create = (fname, lname, callback) => {

    db.query('INSERT INTO PERSON (firstname, lastname, middle) VALUES ("Lanz", "Ruiz", "Bocado")', function (error, results, fields) {
        if (error) throw error;
        callback({result: 'success'});
    });
}


module.exports = create;