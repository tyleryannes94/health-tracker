//testing db connection
const { sequelize } = require('./controllers/api/index');

async function testDatabaseConnection() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    } finally {
      // Close the Sequelize connection when done testing
      await sequelize.close();
    }
  }
  
  testDatabaseConnection();

// end test 