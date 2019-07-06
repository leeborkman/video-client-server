const express = require('express')

const app = express()

const router = require('./routes')

app.use('/', router)


// Setting up port and IP to run on OpenShift or locally
const serverPort = process.env.OPENSHIFT_NODEJS_PORT || 8080
const serverIP = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'
 
app.listen(serverPort, serverIP, () => {
  console.log( `Listening on ${  serverIP  }, port ${  serverPort}` ) //eslint-disable-line
});

