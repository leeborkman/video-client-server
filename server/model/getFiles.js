const fs = require('fs');

function getFiles(callback) {
    const files = [];
    fs.readdir("uploads", (err, items) => {
        if (err)
            return console.log('Unable to read uploads directory: ', err); //eslint-disable-line

        items.forEach( (item) =>  {
            const file = {};
            const stats = fs.statSync('uploads/' + item); //eslint-disable-line

            file.filename = item;
            file.size = stats.size;
            file.mtime = stats.mtime;            

            files.push(file);
        });    

        callback(files);
        return this;
    });
}

module.exports = getFiles;