const { DataTypes }     = require('sequelize')
const db                = require('../config/db.js')
const User              = require('./user.js')



/*
  idImageUser             tipo
  desc                    dados
*/

const ImageUser = db.define('ImageUser',{
  idImageUser: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    alowNull: false,
    primaryKey: true
  },
  tipo: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  nomeArquivo: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  obs: {
    type: DataTypes.STRING,
    alowNull: true,
  },
  b64: {
    type: DataTypes.BLOB('long'),
    alowNull: false,
  }
})

ImageUser.belongsTo(User)
console.log(ImageUser === db.models.ImageUser)

module.exports = ImageUser