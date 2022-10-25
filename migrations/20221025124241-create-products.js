'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
     
      Productcode: {
        type: Sequelize.INTEGER
      },
      ProductName: {
        type: Sequelize.STRING
      },
      Description: {
        type: Sequelize.STRING
      },
      standardCost: {
        type: Sequelize.INTEGER
      },
      listPrice: {
        type: Sequelize.STRING
      },
      recorderLevel: {
        type: Sequelize.STRING
      },
      targetlevel: {
        type: Sequelize.STRING
      },
      quantityparunit: {
        type: Sequelize.INTEGER
      },
      dicontinued: {
        type: Sequelize.STRING
      },
      minimumRecorder: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};