const express = require('express');

const routes = express.Router();

const orders_products = require('./../services/orders_products.service');

  routes.get('/', orders_products.getAllorderproduct);

routes.get('/:id', orders_products.getorderproductByID);
 routes.post('/', orders_products.createorderproduct);
 routes.delete('/:id', orders_products.deleteorderproduct);
  routes.put('/:id', orders_products.updateorderproduct);

module.exports=routes;