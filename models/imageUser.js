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
  desc: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  dados: {
    type: DataTypes.BLOB('long'),
    alowNull: false,
  }
})

ImageUser.belongsTo(User)
console.log(ImageUser === db.models.ImageUser)

module.exports = ImageUser