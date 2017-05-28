const mongoose = require('mongoose');
const Tasks = mongoose.model('Task');
const User = mongoose.model('User');

exports.createTask = (req, res) => {
  if(!req.body.title || !req.body.description) {
    res.status(400).json({'message': 'title, description are required'});
    return false;
  }
  //TODO: implement functionality for task creation
}