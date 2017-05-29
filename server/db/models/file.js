const mongoose = require('mongoose');

const Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;

const FileSchema = new Schema({
  user: {type: ObjectId},
  fileName: {type: String, required: true},
  taskId : {type: ObjectId, required: true},
  score: {type: Number}
}, {
  collection: 'files'
});

module.exports = mongoose.model('File', FileSchema);