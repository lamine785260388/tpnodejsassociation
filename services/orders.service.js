const dbConfig=require("../config/config.json");
const Sequelize=require("sequelize");
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'path/to/database.sqlite'
  });
  const orders=require('../models/orders');
  module.exports={
    createorder(req, res) {
        orders.create(req.body)
        .then(order => {
            res.status(201).json(order);
        })
        .catch(error => {
            res.status(500).json(error)});
    },
    async updateorder(req, res) {
        const idorder = req.params.id;
        const orderUpdated =  await orders.update(req.body, {where: {id: idorder}});
        res.status(201).json(orderUpdated);
    },
    getAllorder(req, res) {
        //res.status(200).json(await Livre.findAll());
        orders.findAll()
        .then(function(order){res.status(200).json(order)})
        .catch(function(error){res.status(500).json(error)});
    },
    async getorderByID(req, res){
        //const idorder = req.params.id;
        //Livre.findOne({where: {id: idLivre}})
        res.status(200).json(await Auteur.findByPK(req.params.id));
    },
    deleteorder(req, res) {
        const idorder = req.params.id;
        orders.destroy({where: {id: idorder}})
        .then(() => {res.status(200).json({status: 'success', message: 'orders bien supprimé'})
        .catch(err =>{res.status(500).json({status: 'error', message: JSON.stringify(err)})})});
    },

  }
 
