const fs = require('fs');
const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.getAllFiles = (req, res) => {
  const user = req.decode._doc;
  const fileNames = fs.readdirSync(`userfiles/${user.email}`);
  res.status(200).json({'message': fileNames});
};