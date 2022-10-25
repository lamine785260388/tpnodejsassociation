const express = require('express');

const routes = express.Router();

const Orderservice = require('./../services/orders.service');

 routes.get('/', Orderservice.getAllorder);

routes.get('/:id', Orderservice.getorderByID);
 routes.post('/', Orderservice.createorder);
routes.delete('/:id', Orderservice.deleteorder);
 routes.put('/:id', Orderservice.updateorder);

module.exports=routes;