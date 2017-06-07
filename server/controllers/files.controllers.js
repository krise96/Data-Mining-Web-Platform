const fs = require('fs');
const mongoose = require('mongoose');
const User = mongoose.model('User');
const File = mongoose.model('File');
const Task = mongoose.model('Task');
const TaskList = mongoose.model('TaskList');
const uploadFile = require('../filesStorage/config');

exports.getAllFiles = (req, res) => {
  const user = req.decode._doc;
  const fileNames = fs.readdirSync(`userfiles/${user.email}`);
  res.status(200).json({'message': fileNames});
};

exports.removeFile = (req, res) => {
  const user = req.decode._doc;
  const filename = req.body.filename;
  try {
    fs.unlinkSync(`userfiles/${user.email}/${filename}`);
    res.status(200).json({'message': 'successfully deleted files'});
  } catch (err) {
    res.status(400).json({'message': `${err.name}: ${err.message}`});
    throw Error(err);
  }
};

exports.uploadFile = (req, res) => {
  const user = req.decode._doc;
  uploadFile(req, res, err => {
    const fileName = req.task.title + req.headers.taskid;
    const extension = '.csv';
    if(extension !== '.csv') {
      res.status(400).json({'message': `File extension error: use .csv extension`});
      return false;
    } 
    if(err) {
      res.status(400).json({'message': `${err.name}: ${err.message}`});
      throw Error(err);
    }
    
    //taskId might be not in headers
    //change in future
    const file = new File({
      user: user._id,
      fileName,
      taskId: req.headers.taskid
    });

    file.save()
      .then(file => {
        if(req.isResultFile) {
          return Task.update({_id: req.task._id}, {$set: {resultFile: file._id}});
        }
        User.update({_id: user._id}, {$push: {files: file._id}})
          .then(() => {
            return Task.update({_id: req.headers.taskid}, {$push: {files: file._id}});
          })
          .then(() => {
            return TaskList.update({user: user._id}, {$push: {tasks: req.headers.taskid}});
          })
          .catch(err => {
            res.status(400).json({'message': `${err.name}: ${err.message}`});
            throw Error(err);
          });
      })
      .then(() => {
        if(req.isResultFile) {
          res.status(200).json({'message': `${req.task.title} successfully created`, taskId: req.task._id});
        } else {
          res.status(200).json({'message': 'Successfully uploaded file'});                
        }
      })
      .catch(err => {
        res.status(400).json({'message': `${err.name}: ${err.message}`});
        throw Error(err);
      });
  })
}