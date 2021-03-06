const app = require('express');
const getFiles = require('./model/getFiles');
const storeFile = require('./model/storeFile');

const router = app.Router();

// Only three ways through this server app



// Default to the api
router.get('/', async (req, res) => {
  res.redirect('/api');
});


// A simple REST File List
router.get('/api', async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  getFiles( (data) => res.json({ files: data }) );
});


// A development form for testing basic upload function 
router.get('/form', (req, res) => {
  res.sendFile(__dirname + '/view/uploadForm.html'); //eslint-disable-line
});


// Upload handle
router.post('/upload', storeFile.single('file'), (req, res) => {
  try {
    res.setHeader('Content-Type', 'application/json');
    res.json(req.file);
  } catch (err) {
    res.send(400);
  }
});

module.exports = router;
