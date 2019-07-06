const express = require('express')
const app = express()

const router = require('./routes')
app.use('/', router)

const port = 8000
app.listen(port, () => {
  console.log('We are live on ' + port)
})
