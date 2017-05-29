const Router = require('express').Router();
const AuthController = require('../controllers/auth.controllers');
const AdminController = require('../controllers/admin.controllers');
const FilesController = require('../controllers/files.controllers');
const TaskController = require('../controllers/tasks.controllers');

const checkAuth = require('./checkAuthMidlleware').checkAuth;

Router.post('/register', AuthController.register);
Router.post('/authenticate', AuthController.authenticate);

Router.use(checkAuth);

Router.get('/isAdmin', AdminController.isAdmin);

Router.get('/files', FilesController.getAllFiles);
Router.post('/removeFile', FilesController.removeFile);
Router.post('/uploadFile', FilesController.uploadFile);

Router.post('/createTask', TaskController.createTask);
Router.post('/closeTask', TaskController.closeTask);
Router.get('/allTasks', TaskController.getAllTasks);
Router.get('/activeTasks', TaskController.getActiveTasks);

module.exports = Router;