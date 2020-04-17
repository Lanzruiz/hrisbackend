var person = require('../model/person');

const fname = "Lanz";
const lname = "Ruiz";
const mname = "Bocado";

exports.create = (res, fname, lname, result =>{
    res.status(200).json({result});
});