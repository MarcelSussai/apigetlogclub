const { verify } = require('jsonwebtoken')

const ensureAuth = (req, res, next) => {
  const authToken = req.headers.authorization

  if(!authToken) { return res.json({error: 'usuário não autorizado'}) }
  const [, token] = authToken.split(' ')
  try {
    const { sub } = verify(token, 'afbd8086a8e413cfdb934be664968c99')
    req.idUser = sub
    return next()
  } catch(err) {
    return res.json({ error: 'usuário não autorzado'})
  }

}

module.exports = ensureAuth