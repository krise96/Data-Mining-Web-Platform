const Router = require('express').Router();
const AuthController = require('../controllers/auth/controllers');

Router.post('/register', AuthController.register);
Router.post('/authenticate', AuthController.authenticate);

module.exports = Router;