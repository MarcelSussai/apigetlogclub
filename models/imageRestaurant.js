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
  desc: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  dados: {
    type: DataTypes.BLOB('long'),
    alowNull: false,
  }
})

ImageRestaurant.belongsTo(Restaurant)
console.log(ImageRestaurant === db.models.ImageRestaurant)

module.exports = ImageRestaurant