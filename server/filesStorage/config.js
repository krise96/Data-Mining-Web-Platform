const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `userfiles/${req.decode._doc.email}`);
  },
  filename: (req, file, callback) => {
    let date = new Date();
    //TODO: add task name to file name
    date = `${date.getDay()}.${date.getMonth()}.${date.getFullYear()}.${date.getMilliseconds()}`;
    callback(null, `${date}-${file.originalname}`);
  }
});

const upload = multer({
  storage
}).single('file');

module.exports = upload;