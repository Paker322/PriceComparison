const express = require('express');
const productController = require('../controllers/product-controller');

const router = express.Router();

router.post('/get-products', productController.getProducts);

module.exports = router;
