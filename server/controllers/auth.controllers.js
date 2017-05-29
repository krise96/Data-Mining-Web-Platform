"use strict";
const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const secret = require('../auth/config').secret;

mongoose.Promise = global.Promise;

exports.register = (req, res) => {
  if(!req.body.email || !req.body.username || !req.body.password) {
    res.status(400).json({'message': 'email, username, password are required'});
    return false;
  }

  User.findOne({email: req.body.email})
    .then(user => {
      if(!user) {

        let user = new User({
          email: req.body.email,
          username: req.body.username,
          admin: req.body.admin || false,
          hash: bcrypt.hashSync(req.body.password, 10)
        });

        user.save()
          .then(user => {
            fs.mkdirSync(`userfiles/${req.body.email}`);
            res.status(201).json({'message': 'user created'});
          })
          .catch(err => {
            res.status(400).json({'message': `${err.name}: ${err.message}`});
          })
      }

      if(user) {
        throw Error('user already exists');
      }
    })
    .catch(err => {
      res.status(400).json({'message': `${err.name}: ${err.message}`});
      throw Error(err);
    });
};

exports.authenticate = (req, res) => {
  //later add population -> populate({path: 'TaskList', populate: {path: 'Task'}}).
  User.findOne({email: req.body.email}).populate({path: 'File'}).exec()
    .then(user => {
      bcrypt.compare(req.body.password, user.hash)
        .then(authorized => {
          if(authorized) {
            const token = jwt.sign(user, secret, {
              //expires in 1 year
              expiresIn: 60 * 60 * 8760
            });
            res.status(200).json({'message': 'user is authorized', user, token, isAdmin: user.admin});
          } else {
            throw Error('authentication failed: wrong password');
          }
        })
        .catch(err => {
          res.status(401).json({'message': `${err.name}: ${err.message}`});
          throw Error(err);
        });
    })
    .catch(err => {
          res.status(401).json({'message': `${err.name}: ${err.message}`});
          throw Error(err);
    });
};