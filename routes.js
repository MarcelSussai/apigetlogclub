// Requires ______________________________________________________
const express             = require('express')
const { addImageUser } = require('./controllers/imagesUser.js')
const {
  addRestaurant, findAllRestaurant, findRestaurantByCode
} = require('./controllers/restaurants.js')
const routes              = express.Router()
const {
  findAll, addUser, findUser, updateUser, authUser
}                         = require('./controllers/users.js')
const { addVehicle } = require('./controllers/vehicles.js')
const ensureAuth          = require('./middlewares/ensureAuth.js')
const cors                        = require('cors')
const crypto = require("crypto")
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



routes.get('/', (req, res) => {
  return res.json({ola: 'mundo, essa api funciona!', teste: crypto.randomBytes(4).toString('hex').toUpperCase() })
})

routes.get('/users', findAll)
routes.get('/users/:id', ensureAuth, findUser)
routes.put('/users/:id', updateUser)
routes.get('/findAllRestaurant', findAllRestaurant)
routes.get('/findRestaurantByCode/:code', findRestaurantByCode)
routes.post('/adduser', addUser)
routes.post('/addVehicle', addVehicle)
routes.post('/addImageUser', addImageUser)
routes.post('/addRestaurant', addRestaurant)
routes.post('/login', authUser)

module.exports = routes