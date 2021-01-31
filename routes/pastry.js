const db = require('../db')
const shortid = require('shortid')
const error = (res, status, text) => res.status(status).json(text).end()

const getAll = (req, res) => {
  const pastry = db.get('pastry')
  res.send(pastry)
}

const createNew = (req, res) => {
  const { name, inStock } = req.body
  if (!name) return error(res, 400, 'name attribute is required')
  if (!inStock) return error(res, 400, 'inStock attribute is required')

  const newItem = { 
    id: shortid.generate(),
    name,
    inStock,
    isFavorite: isFavorite || false,
    ingredients: ingredients || [],
    image: image || null,
    address: address || null,
    hasDelivery: hasDelivery || false,
  }

  db.get('pastry').push(newItem).write()
  res.send(newItem)
}

module.exports = {
  getAll,
  createNew
}