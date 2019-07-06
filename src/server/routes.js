const app = require('express');
const getFiles = require('./model/getFiles');
const uploadForm = require('./view/uploadForm');

const router = app.Router();

// Only three ways through this server app
router.get('/', async (req, res) => {
  const result = getFiles( (data) => { res.send({ files: data } ); });
});

router.get('/form', (req, res) => {
  res.send(uploadForm);
});

router.post('/upload', (req, res) => {
  res.send('uploads a video and returns the resulting list of videos');
});

router.get('/upload', (req, res) => {
  res.send('uploads a video and returns the resulting list of videos - BUT SHOULD BE POST');
});

module.exports = router;
