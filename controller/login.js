const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')

exports.getToken = (req, res, next) => {
    //res.status(200).json({name: 'Lanz', age: 32, email: 'Lanzruizdesigns@gmail.com'});
    const user = {
        user: req.body.username
    }

    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken});

  
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
  