const mongoose = require('mongoose');
const TaskList = mongoose.model('TaskList');

exports.createTaskList = (user) => {
  let taskList = new TaskList({
    user: user._id
  });

  return taskList.save()
    .then(taskList => {
      return taskList;
    })
    .catch(err => {
      return err;
    });
}