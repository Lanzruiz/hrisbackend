const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')
const user = require('../model/user');
const hash = require('../util/hash');


const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

exports.getToken = async (req, res, next) => {

   //1. verify the Username
   const result = await user.findOne(req.body.username);
   
   if(result.length > 0) {

      const securityResult = await hash.CompareHash(req.body.password, result[0].Password);

      //2. verify the password
      if(securityResult == true) {
            //generate AccessToken
            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            res.json({status: 200, accessToken: accessToken});
      } else {
            res.sendStatus(403)
      }

   }else {
        res.sendStatus(404).json({ status: 404});
   }

  
}

exports.getAuth = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user)=>{
       if(err) return res.sendStatus(403)
       req.user = user
       next()
    })
}
  