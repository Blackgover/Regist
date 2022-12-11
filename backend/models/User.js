const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Fname: String,
  Mname: String,
  Sname: String,
  ethnicity: String,
  dateOfBirth: Date,
  gender: String,
  regDate: Date,
  regNumber: Number,
  county: String,
  constituency: String,
  ward: String,
  _id: Number
})
const User = mongoose.model('user', userSchema)
module.exports = User