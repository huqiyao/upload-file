var multer = require('multer');
var sftpStorage = require('multer-sftp');

// var logger = require('morgan');
// function newFileUpload(req,res,next) {
//     var storage = sftpStorage({
//         sftp:{
//             host:'47.96.141.152',
//             port:22,
//             username:'root',
//             password:'@3yaoyao33yao'
//         },
//         destination:function (req,file,cb) {
//             cb(null,'files/');
//         },
//         filename:function (req,file,cb) {
//             cb(null,file.originalname);
//         }
//     });
//     var upload = multer({storage:storage}).array('file');
//     upload(req,res,function (err) {
//         // logger.debug(JSON.stringify(req.body));
//         // logger.debug(JSON.stringify(req.files));
//         if(err){
//             // logger.debug("Error Occured",JSON.stringify(err));
//             res.json({error_code:1,err_desc:err});
//         }else{
//             // logger.debug("Files uploaded successfully");
//             res.json({error_code:0,err_desc:null});
//         }
//
//     })
// }

function newFileUpload(req,res,next){
    var storage = multer.diskStorage({
        destination:function (req,file,cb) {
            cb(null,'../../sources/upload-file');
        },
        filename:function (req,file,cb) {
            cb(null,file.originalname);
        }
    });
    var upload = multer({ storage: storage }).array('file');
    upload(req, res, function (err) {
        console.log(req.files);
        if (err) {
            res.json({error_code:1,err_desc:err});
        }
        else{res.json({error_code:0,err_desc:null})};
    });
}

module.exports = {
    newFileUpload:newFileUpload
};