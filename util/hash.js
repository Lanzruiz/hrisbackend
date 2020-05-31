const bcrypt = require('bcrypt');
const saltRounds = 10;

const GenerateHash = async (password) => {
    return new Promise(function (resolve, reject){
       
        bcrypt.hash(password, saltRounds, function(err, hash) {
            try {
                resolve(hash);
            }catch(err){
                reject(err);
            }
        });
    });
}


const CompareHash = (password, hash) => {

    return new Promise(function (resolve, reject){

        bcrypt.compare(password, hash, function(err, result) {
            console.log('bcrypt resylt',result)
            try {
                resolve(result);
            }catch(err){
                reject(err);
            }
        });

    });
}

module.exports = {
    GenerateHash,
    CompareHash
}    