

exports.getUsers = (req, res, next) => {
  res.status(200).json({name: 'Lanz', age: 32, email: 'Lanzruizdesigns@gmail.com'});

}

exports.createUser = (req, res, next) => {
  res.status(200).json({name: "Lanz", username:"Lanzruiz", email: "Lanzruizdesigns@gmail"});
}