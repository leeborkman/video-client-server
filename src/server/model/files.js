const fs = require('fs');

function files(callback) {
    fs.readdir("uploads", (err, items) => {
        if (err) {
            return console.log('Unable to read uploads directory: ', err);
        }     
        callback(items);
    });
}

module.exports = files;