const mongoose = require('mongoose');

const Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;

const RoleSchema = new Schema({
  title: {type: String}
}, {
  collection: 'roles'
});

module.exports = mongoose.model('Role', RoleSchema);