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

const updateItem = (req, res) => {
  const { id } = req.params
  const { name, inStock, ingredients, image, address, hasDelivery } = req.body
  const permisbleKeys = 'name, inStock, ingredients, image, address, hasDelivery'.split(', ')

  const item = db.get('pastry').find({ id }).value()
  if (!item) return error(res, 404, 'cannot find pastry with this id')

  const keys = Object.keys(req.body)
  const invalid = keys.filter(k => !permisbleKeys.includes(k))

  if (invalid.length) {
    return error(res, 400, `${invalid.join(', ')} is not valid key`)
  }

  if (name && typeof name !== 'string') return error(res, 400, 'name attribute should be type `string`')
  if (inStock && typeof inStock !== 'number') return error(res, 400, 'inStock attribute should be type `number`')
  if (ingredients && !Array.isArray(ingredients)) return error(res, 400, 'ingredients attribute should be type `array`')
  if (image && typeof image !== 'string') return error(res, 400, 'image attribute should be type `string`')
  if (hasDelivery && typeof hasDelivery !== 'boolean') return error(res, 400, 'hasDelivery attribute should be type `boolean`')
  
  if (address) {
    if (!isObject(address)) return error(res, 400, 'address attribute should be type `object`')
    const invalidAddressAttr = Object.keys(req.body.address).find(attr => !['street', 'houseNumber'].includes(attr))
    if (invalidAddressAttr) return error(res, 400, `'${invalidAddressAttr}' is invalid attribute in address object`)
    if (address.houseNumber && typeof address.houseNumber !== 'number') return error(res, 400, 'address.houseNumber attribute should be type `number`')
    if (address.street && typeof address.street !== 'string') return error(res, 400, 'address.street attribute should be type `string`')
  }

  const updatedItem = { ...item, ...req.body }

  db.get('pastry')
    .find({ id })
    .assign(updatedItem).write()

  res.send(updatedItem)
}

const deleteItem = (req, res) => {
  const { id } = req.params
  const item = db.get('pastry').find({ id }).value()
  if (!item) return error(res, 404, 'cannot find pastry with this id')

  db.get('pastry').remove({ id }).write()
  res.send('successful delete')
}

module.exports = {
  getAll,
  createNew,
  updateItem,
  deleteItem
}