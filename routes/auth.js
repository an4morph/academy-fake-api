const db = require('../db')
const shortid = require('shortid')
const error = (res, status, text) => res.status(status).json(text).end()

const login = (req, res) => {
  const { username, password } = req.body
  if (!username) return error(res, 400, 'username attribute is required')
  if (!password) return error(res, 400, 'password attribute is required')

  const user = db.get('users').find({ auth: { username, password } }).value()
  
  if (!user) return error(res, 403, 'incorrect login data')
  res.send({ token: user.token, data: user.data })
}

const signin = (req, res) => {
  const { username, password, firstName, age } = req.body
  if (!username) return error(res, 400, 'username attribute is required')
  if (!password) return error(res, 400, 'password attribute is required')

  const existed = db.get('users').find({ data: { username } }).value()
  if (existed) return error(res, 400, 'user with this username already exists')

  const user = { 
    auth: { username, password },
    data: { username, firstName, age },
    token: `token_${shortid.generate()}` 
  }

  db.get('users').push(user).write()
  res.send({ token: user.token, data: user.data })
}

const me = (req, res) => {
  const token = req.get('X-Auth')
  const user = db.get('users').find({ token }).value()
  if (!user) return error(res, 403, 'Access is denied')

  res.send(user.data)
}

module.exports = {
  login,
  signin,
  me
}