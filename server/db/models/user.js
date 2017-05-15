const mongoose = require('mongoose');

const Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;

const UserSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, unique: true, required:true},
  passwordHash: {type: String, required: true},
  role: {type: String, required: true, ref: 'Role'},
  taskList: [{type: ObjectId, ref: 'TaskList'}],
  files: [{type: ObjectId, ref: 'File'}]
}, {
  collection: 'users'
});

module.exports = mongoose.model('User', UserSchema);