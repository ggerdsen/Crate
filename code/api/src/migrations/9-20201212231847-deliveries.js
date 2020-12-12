'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('deliveries', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      crateProductId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'crateProducts',
          key: 'id'
        },
        onUpdate: 'cascade',
        onDelete: 'cascade'
      },
      delivered: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      purchased: {
        type: Sequelize.BOOLEAN,
        allowNull: false
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
      let sql = `CREATE UNIQUE INDEX "DeliveryCompoundIndex"
              ON public."deliveries"
              USING btree
              ("userId", "crateProductId");
            `;
      return queryInterface.sequelize.query(sql, {raw: true});
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
