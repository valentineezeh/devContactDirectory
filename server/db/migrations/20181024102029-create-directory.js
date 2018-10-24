

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Directories', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER,
    },
    firstname: {
      type: Sequelize.STRING
    },
    lastname: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    location: {
      type: Sequelize.JSONB
    },
    category: {
      type: Sequelize.ENUM,
      values: ['backend', 'frontend', 'others']
    },
    programmingLanguage: {
      type: Sequelize.STRING
    },
    linkedinUrl: {
      type: Sequelize.STRING
    },
    gitHubRepoLink: {
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
  }),
  down: queryInterface => queryInterface.dropTable('Directories')
};
