const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

const Event = sequelize.define('Event', {
  eventName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Define other fields here
});

// Define associations between models if needed
// Event.hasMany(...);
// Event.belongsTo(...);

// Sync models with the database
sequelize.sync()
  .then(() => {
    console.log('Database and tables created!');
  })
  .catch(err => console.error('Error syncing models:', err));
