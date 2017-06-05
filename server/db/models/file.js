const mongoose = require('mongoose');

const Schema = mongoose.Schema,
      ObjectId = Schema.Types.ObjectId;

//set taskId as required in the future
const FileSchema = new Schema({
  user: {type: ObjectId},
  fileName: {type: String, required: true},
  taskId : {type: ObjectId},
  score: {type: Number}
}, {
  collection: 'files'
});

module.exports = mongoose.model('File', FileSchema);