const Sequelize = require('sequelize')

const dados_db = {
  envi: 'deve',
  deve: {
    dbNa: 'getlogclub',
    host: 'localhost',
    user: 'root',
    pass: 'root'
  },
  prod: {
    dbNa: 'getlogclub',
    host: 'localhost',
    user: 'root',
    pass: 'GetLogClub02$'
  },
}

const isdev = dados_db.envi === 'deve'

const c_db = isdev ? { ...dados_db.deve } : { ...dados_db.prod }

const sequelize = new Sequelize(c_db.dbNa, c_db.user, c_db.pass, {
  dialect: 'mysql',
  host: c_db.host,
  define: {
    timestamps: true,
  }
})

const fn = async () => {
  try {
    await sequelize.authenticate()
    console.log('Conexão com sucesso');
  } catch (error) {
    console.log('Deu ruim', error);
  }
}
fn()

module.exports = sequelize