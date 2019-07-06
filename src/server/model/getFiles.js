const fs = require('fs');

function getFiles(callback) {
    fs.readdir("uploads", (err, items) => {
        if (err) {
            return console.log('Unable to read uploads directory: ', err); //eslint-disable-line
        }     
        callback(items);
        return true;
    });
}

module.exports = getFiles;