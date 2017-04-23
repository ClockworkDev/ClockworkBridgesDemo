var express = require('express')
var app = express()
var multer = require('multer');
var webBridge = require('clockwork-web-bridge');
var fs=require('fs');


var upload = multer({ dest: 'uploads/' })

app.use(express.static(__dirname + '/public'));

app.post('/webbridge', upload.single('package'), function (req, res) {
    webBridge(req.file.path, "public/webbridgeuploads").then(function (folderName) {
        fs.unlink(req;.file.path)
        res.redirect(folderName.replace("public/",""));
    });
})

app.listen(process.env.PORT || 3000, function () {

})
