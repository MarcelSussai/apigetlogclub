// Imports ________________________________________________________
const ImageRestaurant = require('../models/imageRestaurant.js')
const ImageUser = require('../models/imageUser.js')
const Restaurant      = require('../models/restaurant.js')
const User            = require('../models/user.js')
const Vehicle         = require('../models/vehicle.js')
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾


const Loader = async () => {

  // user ___________________________________________________________
  // await User.sync()
  // await User.sync({ force: true }) // [PERIGO] MUITO CUIDADO COM ESSE EM PRODUÇÃO
  await User.sync({ alter: true })
  // ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
  
  await Vehicle.sync({ alter: true })
  await Restaurant.sync({ alter: true })
  await ImageUser.sync({ alter: true })
  await ImageRestaurant.sync({ alter: true })
  
}

module.exports = Loader