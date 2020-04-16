var person = require('../model/person');

exports.getUsers = (req, res, next) => {
  res.status(200).json({name: 'Lanz', age: 32, email: 'Lanzruizdesigns@gmail.com'});

}

exports.create = (req, res, next) => {
  person.create();
}