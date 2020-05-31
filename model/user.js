var db = require('../util/db');


const create = (data) => {

  
    db.create(data, 'users', function (error, results, fields) {
        try {
            return results
        } catch(error) {
            return error;
        }
        
     })
         
    
}

const findOne = async (Username, callback) => {

    let query = "Username = ";
    let value = Username;

    return new Promise((resolve, reject) => {

        db.search(query, value, 'users').then(result => {
            try {
                resolve(result);
            } catch(error) {
                reject(error)
            }
        });
    });


    
}

module.exports = {
    create,
    findOne
};