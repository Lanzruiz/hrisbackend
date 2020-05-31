var db = require('../util/db');


const create = async (data) => {

    return new Promise((resolve, reject) => {

        db.create(data, 'users').then((err, results) => {
            try {
                resolve(result);
            } catch(error) {
                reject(err)
            }
            
        });
    });
         
    
}

const findOne = async (Username, callback) => {

    let query = "Username = ";
    let value = Username;

    return new Promise((resolve, reject) => {

        db.search(query, value, 'users').then((result, err) => {
            try {
                resolve(result);
            } catch(error) {
                reject(err)
            }
        });
    });


    
}

module.exports = {
    create,
    findOne
};