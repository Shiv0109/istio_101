var express = require('express');
var rp = require('request-promise');

var router = express.Router();
let libraryName = "lib_iris";

let customerServiceHost = "http://localhost:9500";
let bookServiceHost = "http://localhost:9400";

/* GET home page. */
router.get('/ping', function (req, res, next) {
    res.json({ "service": "available" });
});


router.get('/getLibraryName', function (req, res, next) {
    res.json({ "libraryName": libraryName });
});


router.get('/getAllCustomers', function (req, res, next) {
    let customerUrl = customerServiceHost + "/customers/getAllCustomers?unitname=" + libraryName
    console.log(customerUrl)

    rp(customerUrl)
        .then(function (data) {
            res.json(data);

        })
        .catch(function (err) {
            res.send(err);

        });

});

router.get('/getAllBooks', function (req, res, next) {
    let customerUrl = bookServiceHost + "/books/getAllBooks?libraryname=" + libraryName

    rp(customerUrl)
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.send(err);
        });
});

module.exports = router;