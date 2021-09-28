const { DataTypes }     = require('sequelize')
const db                = require('../config/db.js')
const User              = require('./user.js')

const Restaurant = db.define('Restaurants', {
  idRestaurant: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    alowNull: false,
    primaryKey: true
  },
  nomeRestaurant: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  socialReason: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  cnpj: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  tel1: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  rua: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  numero: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  obs: {
    type: DataTypes.STRING,
    alowNull: true,
  },
  bairro: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  cidade: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  cep: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  code: {
    type: DataTypes.STRING,
    alowNull: false,
  }
})

Restaurant.belongsTo(User)
console.log(Restaurant === db.models.Restaurant)

module.exports = Restaurant