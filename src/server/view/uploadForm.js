const uploadForm = `
<form method='POST' enctype='multipart/form-data' action='upload'>
    File to upload: <input type=file name=file><br>
    <input type=submit value='Press to upload the file!'>
</form>
`

module.exports = uploadForm;
