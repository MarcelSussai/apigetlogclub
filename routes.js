// Requires ______________________________________________________
const express             = require('express')
const { addImageUser } = require('./controllers/imagesUser.js')
const { addRestaurant, findAllRestaurant } = require('./controllers/restaurants.js')
const routes              = express.Router()
const {
  findAll, addUser, findUser, updateUser, authUser
}                         = require('./controllers/users.js')
const { addVehicle } = require('./controllers/vehicles.js')
const ensureAuth          = require('./middlewares/ensureAuth.js')
const cors                        = require('cors')
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾



routes.get('/', (req, res) => {
  return res.json({ola: 'mundo, essa api funciona!'})
})

routes.get('/users', findAll)
routes.get('/users/:id', ensureAuth, findUser)
routes.put('/users/:id', updateUser)
routes.get('/findAllRestaurant', findAllRestaurant)
routes.post('/adduser', addUser)
routes.post('/addVehicle', addVehicle)
routes.post('/addImageUser', cors(), addImageUser)
routes.post('/addRestaurant', addRestaurant)
routes.post('/login', authUser)

module.exports = routes