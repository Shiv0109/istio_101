var express = require('express');
var router = express.Router();
let expectingQueryParam = "unitname";

var customer_data = require('../data/customers.json');

/* GET home page. */
router.get('/ping', function (req, res, next) {
    res.json({ "service": "available" });
});

router.get('/getAllCustomers', function (req, res, next) {
    let resp = {};
    if (expectingQueryParam in req.query) {
        let unitName = req.query[expectingQueryParam];
        if (unitName in customer_data) {
            resp['data'] = customer_data[unitName];
        } else {
            resp['error'] = "Unit name not found"
        }
    } else {
        resp['error'] = "Invalid Query Params";
    }
    res.json(resp);

});

module.exports = router;