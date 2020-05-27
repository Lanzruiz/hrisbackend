const person = require('../model/user');
const PasswordGenerator = require('../util/hash');
const bodyParser = require('body-parser')

exports.add = (req, res, next) => {
    const users  = {
        FirstName: req.body.firstname, 
        LastName: req.body.lastname,
        Username: req.body.Username,
        Password: "ewljrhwherwe"
    };
    
    const result = person(users).then(result => {
       res.status(200).send(result);
    });


}