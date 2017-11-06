/**
 * Created by User on 11/1/2017.
 */
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const request = require('request');
const productModel = require('../models/productModel');


// Get products from database
router.get('/products', function (req, res) {

    productModel.find(function (err, products) {
        if (err)
            return res.json(err);
        res.status(200).json(products);
    });

});

//save products from url to db
router.get('/products/save', function (req, res) {
    request('http://internal.ats-digital.com:3066/api/products', function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var importedJSON = JSON.parse(body);

            for (var i = 0; i < importedJSON.length; i++) {
                var pdt = new productModel(importedJSON[i]);
                //console.log(pdt);
                pdt.save(function (err, product) {
                    if (err)
                        console.log(err);
                    //res.json(err);
                    //res.json(product);
                    console.log(product)
                });
            }
        }
    });
    console.log('saved');
});
module.exports = router;
