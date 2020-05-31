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

const findOne = async (Username) => {

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

const storeRefreshToken = (Userid, hash) => {

    const value = {
        Userid: Userid,
        RefreshToken: hash
    }

    return new Promise((resolve, reject) => {

        db.create(value, 'users_access').then((result, err) => {
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
    findOne,
    storeRefreshToken
};