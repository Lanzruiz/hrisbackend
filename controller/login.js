const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser')

exports.getAuth = (req, res, next) => {
    //res.status(200).json({name: 'Lanz', age: 32, email: 'Lanzruizdesigns@gmail.com'});
    const user = {
        user: req.body.username
    }

    
    const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
    res.json({ accessToken: accessToken});

  
  }
  