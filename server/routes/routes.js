const Router = require('express').Router();
const AuthController = require('../controllers/auth/controllers');
const FilesController = require('../controllers/files/controllers');

const checkAuth = require('./checkAuthMidlleware').checkAuth;

Router.post('/register', AuthController.register);
Router.post('/authenticate', AuthController.authenticate);

Router.use(checkAuth);

Router.get('/files', FilesController.getAllFiles);

module.exports = Router;