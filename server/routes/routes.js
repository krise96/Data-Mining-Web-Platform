const Router = require('express').Router();
const Controller = require('./controllers');

Router.post('/register', Controller.register);
Router.post('/authenticate', Controller.authenticate);

module.exports = Router;