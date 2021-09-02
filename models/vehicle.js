const { DataTypes }     = require('sequelize')
const db                = require('../config/db.js')
const User              = require('./user.js')



/*
  idVehicle           ano
  modelo              placa
  cor
*/

const Vehicle = db.define('Vehicle',{
  idVehicle: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    alowNull: false,
    primaryKey: true
  },
  ano: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  modelo: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  placa: {
    type: DataTypes.STRING,
    alowNull: false,
  },
  cor: {
    type: DataTypes.STRING,
    alowNull: false,
  },
})

Vehicle.belongsTo(User)
console.log(Vehicle === db.models.Vehicle)

module.exports = Vehicle