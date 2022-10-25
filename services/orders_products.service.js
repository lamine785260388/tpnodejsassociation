// const dbConfig=require("../config/config.json");
// const Sequelize=require("sequelize");
// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: 'path/to/database.sqlite'
//   });
  const order_product=require('../models/orders_product');
  module.exports={
    createorderproduct(req, res) {
        order_product.create(req.body)
        .then(product => {
            res.status(201).json(product);
        })
        .catch(error => {
            res.status(500).json(error)});
    },
    async updateorderproduct(req, res) {
        const idorderproduct = req.params.id;
        const orderproductUpdated =  await order_product.update(req.body, {where: {id: idorderproduct}});
        res.status(201).json(orderproductUpdated);
    },
    getAllorderproduct(req, res) {
        //res.status(200).json(await Livre.findAll());
        order_product.findAll()
        .then(function(orderpro){res.status(200).json(orderpro)})
        .catch(function(error){res.status(500).json(error)});
    },
    async getorderproductByID(req, res){
        //const idorder = req.params.id;
        //Livre.findOne({where: {id: idLivre}})
        res.status(200).json(await order_product.findByPK(req.params.id));
    },
    deleteorderproduct(req, res) {
        const idorderproduct = req.params.id;
        order_product.destroy({where: {id: idorderproduct}})
        .then(() => {res.status(200).json({status: 'success', message: 'orders bien supprimé'})
        .catch(err =>{res.status(500).json({status: 'error', message: JSON.stringify(err)})})});
    },
  }