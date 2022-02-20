module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Define category data
    const featureData = [
      {
        name: 'error 1101',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'error 49999',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'error 10000',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'error 33333',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    // Bulk insert categories
    await queryInterface.bulkInsert('features', featureData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('features', null, {});
  },
};
