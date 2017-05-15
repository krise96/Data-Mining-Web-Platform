const mongoose = require('mongoose');

const Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;

const TaskList = new Schema({
  user: {type: ObjectId},
  tasks: [{type: ObjectId, ref: 'Task'}]
}, {
  collection: 'tasksLists'
});

module.exports = mongoose.model('TaskList', TaskList);