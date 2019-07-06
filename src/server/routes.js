const app = require('express');
const getFiles = require('./model/getFiles');
const uploadForm = require('./view/uploadForm');

const router = app.Router();

// Only three ways through this server app

// A simple REST File List
router.get('/', async (req, res) => {
  getFiles( (data) => { res.send({ files: data } ); });
});

// A development form for testing basic upload function 
router.get('/form', (req, res) => {
  res.send(uploadForm);
});

// Upload handle
router.post('/upload', (req, res) => {
  res.send('uploads a video and returns the resulting list of videos');
});

module.exports = router;
