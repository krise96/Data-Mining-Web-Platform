const mongoose = require('mongoose');

const Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
  username: {type: String, required: true},
  email: {type: String, unique: true, required: true},
  hash: {type: String, required: true},
  admin: {type: Boolean},
  taskList: [{type: ObjectId, ref: 'TaskList'}],
  files: [{type: ObjectId, ref: 'File'}]
}, {
  collection: 'users'
});

module.exports = mongoose.model('User', UserSchema);