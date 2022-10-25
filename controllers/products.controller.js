const express = require('express');
const productsService = require('./../services/products.service');

const routes = express.Router();



  routes.get('/', productsService.getAllproduct);

 routes.get('/:id', productsService.getproductByID);
 routes.post('/', productsService.createproduct);
 routes.delete('/:id', productsService.deleteproduct);
  routes.put('/:id', productsService.updateproduct);

module.exports=routes;