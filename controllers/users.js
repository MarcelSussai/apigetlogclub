const User                = require('../models/user')
const { hash, compare }   = require('bcryptjs')
const { sign }            = require('jsonwebtoken')

const findAll = (req, res) => {
  User.findAll().then((result) => res.json(result))
}

const findUser = (req, res) => {
  User.findByPk(req.params.id).then((result) => res.json(result))
}

const addUser = async (req, res) => {

  const { name, email, pass } = req.body

  if (!email) { return res.json({error: 'email não fornecido'}) }

  User.findOne({ where: { email: email } }).then(
    async (result) => {
      if (result) { res.json({error: 'usuário já existe'}) }
      else {
        const passHash = await hash(pass, 8)
  
        User.create({
          name: name,
          email: email,
          pass: passHash,
        }).then((result) => res.json(result))
      }
    }
  )
}

const updateUser = async (req, res) => {
  await User.update(
    {
      name: req.body.name,
      email: req.body.email,
    },
    {
      where: {
        idUser: req.params.id
      },
    }
  )
  User.findByPk(req.params.id).then((result) => res.json(result))
}

const authUser = async (req, res) => {
  const { email, pass } = req.body

  const messageInvalid = 'email ou senha não fornecido ou incorretos'

  const user = await User.findOne({ where: { email: email } }).then(
    (result) => {
      if (!result) { return res.json({error: messageInvalid}) }
      return result
    }
  )
  // console.log(user);
  const passMatch = await compare(pass, user.pass)
  
  if (!passMatch) { return res.json({error: messageInvalid}) }
  // console.log(passMatch);
  

  const token = sign({
    email: user.email
  }, 'afbd8086a8e413cfdb934be664968c99', {
    subject: user.idUser.toString(),
    expiresIn: '1d'
  })

  res.json({email: email, token})
}

module.exports = { findAll, addUser, findUser, updateUser, authUser }