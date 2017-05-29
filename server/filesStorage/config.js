const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `userfiles/${req.decode._doc.email}`);
  },
  filename: (req, file, callback) => {
    callback(null, `${file.originalname}`);
  }
});

const upload = multer({
  storage
}).single('file');

module.exports = upload;