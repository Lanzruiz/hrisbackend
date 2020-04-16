var db = require('../util/db');


const create = () => {
    db.query('INSERT INTO PERSON (firstname) VALUES ("Lanz Ruiz")', function (error, results, fields) {
        if (error) throw error;
        console.log('The solution is: ', results[0].solution);
    });
}


module.exports = create;