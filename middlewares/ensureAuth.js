const { verify } = require('jsonwebtoken')

const ensureAuth = (req, res, next) => {
  const authToken = req.headers.authorization

  if(!authToken) { return res.json({error: 'usuário não autorizado'}) }
  const [, token] = authToken.split(' ')
  try {
    const { sub } = verify(token, process.env.JWT_KEY)
    req.idUser = sub
    return next()
  } catch(err) {
    return res.json({ error: 'usuário não autorzado'})
  }

}

module.exports = ensureAuth