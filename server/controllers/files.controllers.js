const fs = require('fs');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const uploadFile = require('../filesStorage/config');

exports.getAllFiles = (req, res) => {
  const user = req.decode._doc;
  const fileNames = fs.readdirSync(`userfiles/${user.email}`);
  res.status(200).json({'message': fileNames});
};

exports.removeFile = (req, res) => {
  const user = req.decode._doc;
  const filename = req.body.filename;
  try {
    fs.unlinkSync(`userfiles/${user.email}/${filename}`);
    res.status(200).json({'message': 'successfuly deleted files'});
  } catch (err) {
    res.status(400).json({'message': `${err.name}: ${err.message}`});
    throw Error(err);
  }
};

exports.uploadFile = (req, res) => {
  uploadFile(req, res, err => {
    const extension = req.file.originalname.split('.')[1];
    if(extension !== 'csv') {
      res.status(400).json({'message': `File extension error: use .csv extension`});
      return false;
    } 
    if(err) {
      res.status(400).json({'message': `${err.name}: ${err.message}`});
      throw Error(err);
    }
    res.status(200).json({'message': 'Successfuly uploaded file'});
  })
}