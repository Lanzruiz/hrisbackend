const person = require('../model/person');
const bodyParser = require('body-parser')

exports.create = (req, res, next) => {
    const data = [
        [ 
            req.body.firstname, 
            req.body.lastname, 
            req.body.middlename, 
            req.body.contact, 
            req.body.email, 
            req.body.dateofbirth,
            req.body.address
        ]
    ];
    
    person(data, (result)=>{
       res.status(200).send({status: result});
    });
}