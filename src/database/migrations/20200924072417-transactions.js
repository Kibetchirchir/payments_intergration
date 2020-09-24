module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      reference_id: {
        type: Sequelize.STRING,
        unique: true,
      },
      amount: {
        type: Sequelize.FLOAT,
        default: 0.0,
      },
      phone_number: {
        type: Sequelize.BIGINT,
      },
      commission: {
        type: Sequelize.FLOAT,
        default: 0.0,
      },
      status: {
        type: Sequelize.STRING,
        default: 'pending',
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('transactions');
  },
};
