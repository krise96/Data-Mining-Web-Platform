const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const secret = require('../auth/config').secret;

mongoose.Promise = global.Promise;

exports.register = (req, res) => {
  if(!req.body.email || !req.body.username || !req.body.password) {
    res.status(400).json({'message': 'email, username, password are required'});
    return false;
  }

  let user = new User({
    email: req.body.email,
    username: req.body.username,
    admin: req.body.admin || false,
    hash: bcrypt.hashSync(req.body.password, 10)
  });
  
  user.save()
    .then(user => {
      res.status(201).json({'message': 'user created'});
    })
    .catch(err => {
      res.status(400).json({'message': `${err.name}: ${err.message}`});
    })
};

exports.authenticate = (req, res) => {
  User.findOne({email: req.body.email})
    .then(user => {
      bcrypt.compare(req.body.password, user.hash)
        .then(authorized => {
          if(authorized) {
            const token = jwt.sign(user, secret, {
              //expires in 24 hours
              expiresIn: 60 * 60 * 24
            });
            res.status(200).json({'message': 'user is authorized', token});
          } else {
            throw Error('authentication failed: wrong password');
          }
        })
        .catch(err => {
          res.status(401).json({'message': `${err.name}: ${err.message}`});
        });
    })
    .catch(err => {
          res.status(401).json({'message': `${err.name}: ${err.message}`});
    });
}; 