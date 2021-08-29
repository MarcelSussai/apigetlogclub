// Requires ______________________________________________________
const express             = require('express')
const routes              = express.Router()
const {
  findAll, addUser, findUser, updateUser, authUser
}                         = require('./controllers/users.js')
const ensureAuth          = require('./middlewares/ensureAuth.js')
// ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

routes.get('/', (req, res) => {
  return res.json({ola: 'mundo, essa api funciona!'})
})

routes.get('/users', ensureAuth, findAll)
routes.get('/users/:id', ensureAuth, findUser)
routes.put('/users/:id', updateUser)
routes.post('/adduser', addUser)
routes.post('/login', authUser)

module.exports = routes