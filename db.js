const { Sequelize } = require('sequelize')

// Database
const sequelize = new Sequelize(
  'postgresql://renderdatabase_6rml_user:7EpwVhd8vGYnYjaOa9p0sknzvAY1EWq9@dpg-csgm2ojv2p9s73dk89lg-a/renderdatabase_6rml', // TODO: database connection string
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
