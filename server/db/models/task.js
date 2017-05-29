const mongoose = require('mongoose');

const Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;

const TaskSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  userList: [{type: ObjectId, ref: 'User'}],
  createdBy: {type: ObjectId, required: true, ref: 'User'},
  isClosed: {type: Boolean, required: true},
  resultFile: {type: ObjectId}
}, {
  collection: 'tasks'
});

module.exports = mongoose.model('Task', TaskSchema);