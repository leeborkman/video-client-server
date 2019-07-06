var app = require('express')
var router = app.Router()

// Only three ways through this server app
router.get('/', function (req, res) {
  res.send('List of videos')
})

router.get('/form', function (req, res) {
  res.send('form for uploading a video')
})

router.post('/upload', function (req, res) {
  res.send('uploads a video and returns the resulting list of videos')
})

router.get('/upload', function (req, res) {
  res.send('uploads a video and returns the resulting list of videos - BUT SHOULD BE POST')
})

module.exports = router
