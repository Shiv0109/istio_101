var express = require('express');
var rp = require('request-promise');

var router = express.Router();
let libraryName = "lib_iris";

let customerServiceHostLocal = "http://localhost:9500";
let bookServiceHostLocal = "http://localhost:9400";

let customerServiceHost_onKube = "http://customerservice:9500";
let bookserviceHost_onKube = "http://bookservice:9400";

/* GET home page. */
router.get('/ping', function (req, res, next) {
    res.json({ "service": "available" });
});


router.get('/getLibraryName', function (req, res, next) {
    res.json({ "libraryName": libraryName });
});


router.get('/getAllCustomers', function (req, res, next) {
    let customerUrl = customerServiceHost_onKube + "/customers/getAllCustomers?unitname=" + libraryName
    console.log("Queried Url-" + customerUrl)

    rp(customerUrl)
        .then(function (data) {
            res.json(data);

        })
        .catch(function (err) {
            res.send(err);

        });

});

router.get('/getAllBooks', function (req, res, next) {
    let bookserviceUrl = bookserviceHost_onKube + "/books/getAllBooks?libraryname=" + libraryName
    console.log("Queried Url-" + bookserviceUrl)

    rp(bookserviceUrl)
        .then(function (data) {
            res.json(data);
        })
        .catch(function (err) {
            res.send(err);
        });
});

module.exports = router;