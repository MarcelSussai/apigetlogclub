const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
  return res.json({ola: 'mundo, essa api funciona!'})
})

module.exports = routes