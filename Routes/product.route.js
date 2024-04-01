const express = require('express');
const Product = require('../Models/product.model.js');
const router = express.Router();
const {getProducts,getProduct,createProduct,updateProduct,deleteProduct} = require('../Controller/product.controller.js');

//get request
router.get('/', getProducts);
router.get('/:id', getProduct);

//post request
router.post('/', createProduct);

//put request
router.put('/:id',updateProduct);

//delete request
router.delete('/:id',deleteProduct);

module.exports = router;