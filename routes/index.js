var express = require('express');
var uploadFile = require('../services/index');
// var multer = require('multer');
// var upload = multer({dest:'./files'});
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get("/", function (req, res) {
    // res.sendFile(__dirname + "/index.html");
    res.render('index');
});

// router.post("/uploadNewFile", upload.single('fileUploader'),function (req, res) {
//     console.log("请求文件",req.file);
//     console.log("请求体",req.body);
//     res.json("完成");
//     // uploaders.newFileUpload(req,res);
// });
router.post("/uploadNewFile", function (req, res) {
    console.log(req.files);
    uploadFile.newFileUpload(req, res);
});

module.exports = router;
