const express = require('express');
const cors = require('cors');

const router = require('./routes');


const app = express();
app.use(cors({credentials: true, origin: true}));
app.use('/', router);
app.use(express.static('uploads'));


// Setting up port and IP to run on OpenShift or locally
const serverPort = process.env.OPENSHIFT_NODEJS_PORT || 8080;
const serverIP = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';
 
app.listen(serverPort, serverIP, () => {
  console.log( `Listening on ${  serverIP  }, port ${  serverPort}` ); //eslint-disable-line
});

module.exports = app;

