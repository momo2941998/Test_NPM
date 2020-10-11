const express = require('express')
const multer = require('multer')
const uuid = require('uuid')
const path = require('path')
var fs = require('fs');
var dir = 'uploads/image';

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync(dir)) fs.mkdirSync(dir);
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        var extname = path.extname(file.originalname);
        cb(null, uuid.v4() + '.' + Date.now() + extname);
    }
})

var upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 4
    },
    fileFilter: null
})

const router = express.Router();


router.post('/upload', upload.single('fileName'), (req, res) => {
    res.json(req.file.path);
})

// content-type application/json
router.delete('/delete', (req, res) => {
    var {path} = req.body;
    fs.unlink(path, (err) => {
        if (err) throw err;
        console.log(path+ ' was deleted');})
    res.json("done");
})

module.exports = router;