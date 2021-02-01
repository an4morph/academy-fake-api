const db = require('../db')
const shortid = require('shortid')
const error = (res, status, text) => res.status(status).json(text).end()

const getAll = (req, res) => {
  const pastry = db.get('pastry')
  res.send(pastry)
}

function isObject (value) {
  return value && typeof value === 'object' && value.constructor === Object;
}

const createNew = (req, res) => {
  const { name, inStock, ingredients, image, address, hasDelivery } = req.body
  if (!name) return error(res, 400, 'name attribute is required')
  if (!inStock) return error(res, 400, 'inStock attribute is required')

  if (typeof name !== 'string') return error(res, 400, 'name attribute should be type `string`')
  if (typeof inStock !== 'number') return error(res, 400, 'inStock attribute should be type `number`')
  if (ingredients && !Array.isArray(ingredients)) return error(res, 400, 'ingredients attribute should be type `array`')
  if (image && typeof image !== 'string') return error(res, 400, 'image attribute should be type `string`')
  if (hasDelivery && typeof hasDelivery !== 'boolean') return error(res, 400, 'hasDelivery attribute should be type `boolean`')

  const invalidAddressAttr = Object.keys(req.body.address).find(attr => !['street', 'houseNumber'].includes(attr))
  
  if (address) {
    if (!isObject(address)) return error(res, 400, 'address attribute should be type `object`')
    if (invalidAddressAttr) return error(res, 400, `'${invalidAddressAttr}' is invalid attribute in address object`)
    if (address.houseNumber && typeof address.houseNumber !== 'number') return error(res, 400, 'address.houseNumber attribute should be type `number`')
    if (address.street && typeof address.street !== 'string') return error(res, 400, 'address.street attribute should be type `string`')
  }

  const newItem = { 
    id: shortid.generate(),
    name,
    inStock,
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
  createNew,
}