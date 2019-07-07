const multer = require('multer')

const storeFile = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      const path = 'uploads/';
      callback(null, path);
    },
    filename: (req, file, callback) => {
      callback(null, file.originalname);
    }
  })
})

module.exports = storeFile
