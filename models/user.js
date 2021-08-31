const { DataTypes }     = require('sequelize')
const db                = require('../config/db.js')

const User = db.define('User', {
  idUser: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    alowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: '',
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    uniqueOne: true
  },
  pass: {
    type: DataTypes.STRING,
    allowNull: false
  },
  rg: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cpf: {
    type: DataTypes.STRING,
    allowNull: true
  },
  tel1: {
    type: DataTypes.STRING,
    allowNull: true
  },
  nasc: {
    type: DataTypes.DATE,
    allowNull: true
  },
  admin: {
    type: DataTypes.STRING,
    allowNull: true
  },
  
})

console.log(User === db.models.User)

module.exports = User