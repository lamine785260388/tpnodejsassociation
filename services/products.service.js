// const dbConfig=require("../config/config.json");
// const Sequelize=require("sequelize");
// const sequelize = new Sequelize({
//     dialect: 'sqlite',
//     storage: 'path/to/database.sqlite'
//   });
  const products=require('../models/products');
  module.exports={
    createproduct(req, res) {
        products.create(req.body)
        .then(product => {
            res.status(201).json(product);
        })
        .catch(error => {
            res.status(500).json(error)});
    },
    async updateproduct(req, res) {
        const idproduct = req.params.id;
        const productUpdated =  await products.update(req.body, {where: {id: idproduct}});
        res.status(201).json(productUpdated);
    },
    getAllproduct(req, res) {
        //res.status(200).json(await Livre.findAll());
        products.findAll()
        .then(function(product){res.status(200).json(product)})
        .catch(function(error){res.status(500).json(error)});
    },
    async getproductByID(req, res){
        //const idorder = req.params.id;
        //Livre.findOne({where: {id: idLivre}})
        res.status(200).json(await products.findByPK(req.params.id));
    },
    deleteproduct(req, res) {
        const idproduct = req.params.id;
        products.destroy({where: {id: idproduct}})
        .then(() => {res.status(200).json({status: 'success', message: 'orders bien supprimé'})
        .catch(err =>{res.status(500).json({status: 'error', message: JSON.stringify(err)})})});
    },

  }