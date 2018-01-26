const { log } = require('util');

const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
// const db = mongojs('mongodb://localhost:27017/products', ['products']);
// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/test', (err, db) => {
        if (err) return console.log(err);
        // console.log('db',db);
        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get products
router.get('/api/products', (req, res) => {
    console.log('products route')
    connection((db) => {
        db.collection('products')
            .find()
            .toArray()
            .then((products) => {
                console.log(products);
                // res.data = products;
                
                res.json(products);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
// router.get('/products', (req, res) => {
// db.products.find((err, res)=>{
//     console.log(res)
//     if (!err) {
//         res.json(res)
//     }
// });
// });

module.exports = router;