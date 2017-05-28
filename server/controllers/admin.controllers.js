const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.isAdmin = (req, res) => {
  const user = req.decode._doc;
  User.findOne({_id: user._id})
    .then(user => {
      if(user.admin) {
        res.status(200).json({'message': true});
      } else {
        res.status(200).json({'message': false});
      }
    })
    .catch(err => {
      res.status(400).json({'message': `${err.name}: ${err.message}`});
      throw Error(err);
    })
}