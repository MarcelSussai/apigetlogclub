const { DataTypes }     = require('sequelize')
const db                = require('../config/db.js')
const Restaurant = require('./restaurant.js')



/*
  idImageUser             tipo
  desc                    dados
*/

const ImageRestaurant = db.define('ImageRestaurant',{
  idImageRestaurant: {
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

ImageRestaurant.belongsTo(Restaurant)
console.log(ImageRestaurant === db.models.ImageRestaurant)

module.exports = ImageRestaurant