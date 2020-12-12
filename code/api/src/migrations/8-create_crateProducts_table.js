'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('crateProducts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    crateId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'crates',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
    productId: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'products',
        key: 'id'
      },
      onUpdate: 'cascade',
      onDelete: 'cascade'
    },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => {
      // Create Unique CompoundIndex
      let sql = `CREATE UNIQUE INDEX "CrateProductCompoundIndex"
              ON public."crateProducts"
              USING btree
              ("crateId", "productId");
            `;
      return queryInterface.sequelize.query(sql, {raw: true});
      });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('crateProducts');
  }
};