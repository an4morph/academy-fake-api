const db = require('../db')
const shortid = require('shortid')
const error = (res, status, text) => res.status(status).json(text).end()

const getAll = (req, res) => {
  const pastry = db.get('pastry')
  res.send(pastry)
}

const getItem = (req, res) => {
  const { id } = req.params
  const item = db.get('pastry_expanded').find({ id }).value()
  if (!item) return error(res, 404, 'cannot find item with this id')
  res.send(item)
}

function isObject (value) {
  return value && typeof value === 'object' && value.constructor === Object;
}

const createNew = (req, res) => {
  const { name, inStock, ingredients, cost, image, address, hasDelivery } = req.body
  const permisbleKeys = 'name, inStock, ingredients, cost, image, address, hasDelivery'.split(', ')

  const keys = Object.keys(req.body)
  const invalid = keys.filter(k => !permisbleKeys.includes(k))
  if (invalid.length) {
    return error(res, 400, `${invalid.join(', ')} is not valid key`)
  }

  if (!name) return error(res, 400, 'name attribute is required')
  if (!inStock) return error(res, 400, 'inStock attribute is required')
  if (!cost) return error(res, 400, 'cost attribute is required')

  if (typeof name !== 'string') return error(res, 400, 'name attribute should be type `string`')
  if (typeof inStock !== 'number') return error(res, 400, 'inStock attribute should be type `number`')
  if (typeof cost !== 'number') return error(res, 400, 'cost attribute should be type `number`')
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

  const newItem = { 
    id: shortid.generate(),
    name,
    inStock,
    cost,
    ingredients: ingredients || [],
    image: image || null,
  }
  const expanded = {
    address: address || null,
    hasDelivery: hasDelivery || false,
  }

  db.get('pastry').push(newItem).write()
  db.get('pastry_expanded').push({...newItem, ...expanded}).write()
  res.send({...newItem, ...expanded})
}

const updateItem = (req, res) => {
  const { id } = req.params
  const { name, inStock, ingredients, cost, image, address, hasDelivery } = req.body
  const permisbleKeys = 'name, inStock, ingredients, cost, image, address, hasDelivery'.split(', ')

  const item = db.get('pastry').find({ id }).value()
  const item_expanded = db.get('pastry_expanded').find({ id }).value()
  if (!item || !item_expanded) return error(res, 404, 'cannot find pastry with this id')

  const keys = Object.keys(req.body)
  const invalid = keys.filter(k => !permisbleKeys.includes(k))

  if (invalid.length) {
    return error(res, 400, `${invalid.join(', ')} is not valid key`)
  }

  if (name && typeof name !== 'string') return error(res, 400, 'name attribute should be type `string`')
  if (inStock && typeof inStock !== 'number') return error(res, 400, 'inStock attribute should be type `number`')
  if (cost && typeof cost !== 'number') return error(res, 400, 'cost attribute should be type `number`')
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

  const updatedItem = { ...item_expanded, ...req.body }
  const not_expanded = Object.assign({}, updatedItem)
  delete not_expanded['hasDelivery']
  delete not_expanded['address']

  db.get('pastry').find({ id }).assign(not_expanded).write()
  db.get('pastry_expanded').find({ id }).assign(updatedItem).write()

  res.send(updatedItem)
}

const deleteItem = (req, res) => {
  const { id } = req.params
  const item = db.get('pastry').find({ id }).value()
  const item_expanded = db.get('pastry_expanded').find({ id }).value()
  if (!item || !item_expanded) return error(res, 404, 'cannot find pastry with this id')

  db.get('pastry').remove({ id }).write()
  db.get('pastry_expanded').remove({ id }).write()
  
  res.send({
    id: item.id,
    success: true
  })
}

module.exports = {
  getAll,
  getItem,
  createNew,
  updateItem,
  deleteItem
}