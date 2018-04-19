var express = require('express');
var router = express.Router();
let expectingQueryParam = "libraryname";

var library_data = require('../data/libraries.json');

/* GET home page. */
router.get('/ping', function (req, res, next) {
    res.json({ "service": "available" });
});

router.get('/getAllBooks', function (req, res, next) {
    let resp = {};
    if (expectingQueryParam in req.query) {
        let libraryName = req.query[expectingQueryParam];
        if (libraryName in library_data) {
            resp['data'] = library_data[libraryName];
        } else {
            resp['error'] = "Library name not found"
        }
    } else {
        resp['error'] = "Invalid Query Params";
    }
    res.json(resp);

});

router.get("getBookInfo/:isbn", function (req, res, next, ) {


})

module.exports = router;