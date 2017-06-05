const mongoose = require('mongoose');
const Tasks = mongoose.model('Task');
const User = mongoose.model('User');
const TaskList = mongoose.model('TaskList');
const uploadFile = require('./files.controllers').uploadFile;

exports.createTask = (req, res) => {
  const user = req.decode._doc;

  if(!req.headers.title || !req.headers.description) {
    res.status(400).json({'message': 'title, description are required'});
    return false;
  }

  if(!user.admin) {
    res.status(403).json({'message': 'user is not admin'});
    return false;
  }
  
  const task = new Tasks({
    title: req.headers.title,
    description: req.headers.description,
    createdBy: user._id,
    isClosed: false
  });

  task.save()
    .then(task => {
      req.isResultFile = true;
      req.task = task;
      uploadFile(req, res);
    })
    .catch(err => {
      res.status(400).json({'message': `${err.name}: ${err.message}`});
      throw Error(err);
    });
};

exports.closeTask = (req, res) => {
  const user = req.decode._doc;

  if(!user.admin) {
    res.status(403).json({'message': 'user is not admin'});
    return false;
  }
  if(!req.body.taskId) {
    res.status(403).json({'message': 'no taskId in request'});
    return false;
  }

  Tasks.update({_id: req.body.taskId}, {$set: {isClosed: true}})
    .then(() => {
      res.status(200).json({'message': `task closed`});
    })
    .catch(err => {
      res.status(400).json({'message': `${err.name}: ${err.message}`});
      throw Error(err);
    });
};

exports.getAllTasks = (req, res) => {
  Tasks.find()
    .then(tasks => {
      res.status(200).json({'message': tasks});
    })
    .catch(err => {
      res.status(400).json({'message': `${err.name}: ${err.message}`});
      throw Error(err);
    });
};

exports.getActiveTasks = (req, res) => {
  Tasks.find({isClosed: false})
    .then(activeTasks => {
      res.status(200).json({'message': activeTasks});
    })
    .catch(err => {
      res.status(400).json({'message': `${err.name}: ${err.message}`});
      throw Error(err);
    });
};

exports.getTask = (req, res) => {
  if(!req.body.taskId) {
    res.status(403).json({'message': 'no taskId in request'});
  }
  Tasks.findOne({_id: req.body.taskId})
    .then(task => {
      res.status(200).json({'message': task});
    })
    .catch(err => {
      res.status(400).json({'message': `${err.name}: ${err.message}`});
      throw Error(err);
    });
};

exports.getUsersTasks = (req, res) => {
  const user = req.decode._doc;
  TaskList.findOne({user: user._id}).populate({path: 'tasks'}).exec()
    .then(tasks => {
      res.status(200).json({'message': tasks});
    })
    .catch(err => {
      res.status(400).json({'message': `${err.name}: ${err.message}`});
      throw Error(err);
    });
}