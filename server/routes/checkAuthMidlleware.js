const jwt = require('jsonwebtoken');
const secret = require('../auth/config').secret;

exports.checkAuth = (req, res, next) => {
  const token = req.cookies.token;
  if(token) {
    jwt.verify(token, secret, (err, decode) => {
      if(err) {
        return res.status(403).json({'message': `${err.name}: ${err.message}`});
      } else {
        req.decode = decode;
        next();
      }
    });
  } else {
    return res.status(403).json({'message': 'No token provided'});
  }
}