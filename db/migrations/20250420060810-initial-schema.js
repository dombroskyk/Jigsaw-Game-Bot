var DataTypes = require('sequelize/lib/data-types');

/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    const GamesTableDefinition = {
        id: { 
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lowerPlayerBound: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false
        },
        upperPlayerBound: DataTypes.INTEGER.UNSIGNED,
        steamId: DataTypes.INTEGER.UNSIGNED,
        basicImported: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
    
        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    };
    
    const TagsTableDefinition = {
      id: { 
          type: DataTypes.INTEGER.UNSIGNED,
          autoIncrement: true,
          unique: true,
          primaryKey: true
      },
      name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true
      },
    
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    };

    const UserPlatformMappingsTableDefinition = {
      id: { 
          type: DataTypes.STRING,
          primaryKey: true,
          allowNull: false
      },
      steamId: DataTypes.STRING,
    
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    };
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("Game", GamesTableDefinition);
    await queryInterface.createTable("Tag", TagsTableDefinition);
    await queryInterface.createTable("UserPlatformMapping", UserPlatformMappingsTableDefinition);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("Game");
    await queryInterface.dropTable("Tag");
    await queryInterface.dropTable("UserPlatformMapping");
  }
}
