const express = require('express')
const app = express()

const router = require('./routes')
app.use('/', router)


// Setting up port and IP to run on OpenShift or locally
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'
 
app.listen(server_port, server_ip_address, function () {
  console.log( "Listening on " + server_ip_address + ", port " + server_port )
});

