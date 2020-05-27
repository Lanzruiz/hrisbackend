const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const hashpassword = (password, callback) => {
    bcrypt.hash(password, saltRounds, function(err, hash) {
        // Store hash in your password DB.
        callback(hash);
    });
}

exports.getToken = (req, res, next) => {
    //res.status(200).json({name: 'Lanz', age: 32, email: 'Lanzruizdesigns@gmail.com'});

    hashpassword(req.body.password, (hash)=>{
        
          
            const user = {
                user: req.body
            }

            const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
            res.json({ accessToken: accessToken, username: req.body.username});

          
    })

    

  
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
  