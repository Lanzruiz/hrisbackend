const user = require('../model/user');
const hash = require('../util/hash');
const bodyParser = require('body-parser')



exports.add = async (req, res) => {

    const password =  await hash.GenerateHash(req.body.password);
    const users  = {
        FirstName: req.body.firstname, 
        LastName: req.body.lastname,
        Username: req.body.username,
        Password: password
    };
    
    const result = await user.findOne(req.body.username);

    if(result.length < 1) {
        const result = user.create(users);
        res.sendStatus(200)
    }else {
        res.sendStatus(403)
    }
    

    

}

exports.profile = async (req, res) => {
   res.send('Your are in user controller')
}