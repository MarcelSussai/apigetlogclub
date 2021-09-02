const Sequelize     = require('sequelize')

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    dialect: 'mysql',
    host: process.env.DB_HOST,
    define: {
      timestamps: true,
    },
    dialectOptions: {
      useUTC: false //for reading from database
    },
    timezone: '-03:00'
})

const fn = async () => {
  try {
    await sequelize.authenticate()
    console.log('[CONECTADO - DB] - conectado ao banco de dados, MySql');
  } catch (error) {
    console.log('Deu ruim', error);
  }
}
fn()

module.exports = sequelize

