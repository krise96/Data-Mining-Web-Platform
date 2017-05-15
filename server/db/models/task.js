const mongoose = require('mongoose');

const Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;

const TaskSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  userList: [{type: ObjectId, ref: 'User'}]
}, {
  collection: 'tasks'
});

module.exports = mongoose.model('Task', TaskSchema);