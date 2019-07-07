const fs = require('fs');

function getFiles(callback) {
    const files = [];
    fs.readdir("uploads", (err, items) => {
        if (err)
            return console.log('Unable to read uploads directory: ', err); //eslint-disable-line

        for (let i=0; i<items.length; i++) {
            let file = {};
            file.filename = items[i];
            file.size = fs.statSync('uploads/' + items[i]).size;
            
            files.push(file);
        }    
        callback(files);
        return true;
    });
}

module.exports = getFiles;