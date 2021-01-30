const db = require('../db')
const shortid = require('shortid')
const error = (res, status, text) => res.status(status).json(text).end()

const getAll = (req, res) => {
  const pastry = db.get('pastry')
  res.send(pastry)
}

module.exports = {
  getAll
}