const app = require('express');

const router = app.Router();

// Only three ways through this server app
router.get('/', (req, res) => {
  res.send('List of videos');
});

router.get('/form', (req, res) => {
  res.send('form for uploading a video');
});

router.post('/upload', (req, res) => {
  res.send('uploads a video and returns the resulting list of videos');
});

router.get('/upload', (req, res) => {
  res.send('uploads a video and returns the resulting list of videos - BUT SHOULD BE POST');
});

module.exports = router;
