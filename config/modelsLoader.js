const User      = require('../models/user.js')


const Loader = async () => {
  // await User.sync()
  await User.sync({ alter: true })
}

module.exports = Loader