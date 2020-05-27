const bcrypt = require('bcrypt');
const saltRounds = 10;

const GenerateHash = async (password) => {
    return new Promise(function (resolve, reject){
       
        bcrypt.hash(password, saltRounds).then(function(error, hash) {
            try {
                resolve(hash);
            } catch (err) {
                reject(err);
            }
        });
    });
}


module.exports = GenerateHash;