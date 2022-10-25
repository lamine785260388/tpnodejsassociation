const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const orderscontroller = require('./controllers/orders.controller');
const productController=require('./controllers/products.controller');
const orderProduct=require('./controllers/orders_products.controller');
const orders_product = require('./models/orders_product');


var corsOptions = {
    origin: "{http://localhost:4200}"
  };
const app = express();
const PORT=8989


app.use(cors(corsOptions));
app.use(bodyParser.json());


app.use('/api/v1/orders', orderscontroller);
app.use('/api/v1/products',productController);
app.use('api/v1/orderproduct',orders_product);



app.listen(PORT, ()=>{console.log(`Serveur lancé sur localhost:${PORT}`)});
