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

    const userData = [
      {
        email: 'zaver1',
        password: 'zaver1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: 'zaver2',
        password: 'zaver2',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: 'zaver',
        password: 'zaver',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        email: 'zaver3',
        password: 'zaver3',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];
    await queryInterface.bulkInsert('users', userData);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('features', null, {});
    await queryInterface.bulkDelete('users', null, {});
  },
};
