const db = require('../db')
const shortid = require('shortid')
const error = (res, status, text) => res.status(status).json(text).end()

const getAll = (req, res) => {
  const contacts = db.get('contacts')
  res.send(contacts)
}

const getItem = (req, res) => {
  const { id } = req.params
  const contact = db.get('contacts_expanded').find({ id }).value()
  if (!contact) return error(res, 404, 'cannot find contact with this id')
  res.send(contact)
}

const createNew = (req, res) => {
  const { name, number1, number2, birthday } = req.body
  const permisbleKeys = 'name, number1, number2, birthday'.split(', ')

  const keys = Object.keys(req.body)
  const invalid = keys.filter(k => !permisbleKeys.includes(k))
  if (invalid.length) {
    return error(res, 400, `${invalid.join(', ')} is not valid keys`)
  }

  if (!name) return error(res, 400, '`name` attribute is required')
  if (!number1) return error(res, 400, '`number1` attribute is required')

  const newContact = { 
    name,
    id: shortid.generate(),
  }
  const expanded = {
    number1: number1 || null,
    number2: number2 || null,
    birthday: birthday || null,
  }

  db.get('contacts').push(newContact).write()
  db.get('contacts_expanded').push({ ...newContact, ...expanded }).write()
  res.send({ ...newContact, ...expanded })
}

const updateItem = (req, res) => {
  const { id } = req.params
  const { name, number1, number2, birthday } = req.body
  const permisbleKeys = 'name, number1, number2, birthday'.split(', ')

  const contact = db.get('contacts').find({ id }).value()
  const contact_expanded = db.get('contacts_expanded').find({ id }).value()
  if (!contact || !contact_expanded) return error(res, 404, 'cannot find contact with this id')

  const keys = Object.keys(req.body)
  const invalid = keys.filter(k => !permisbleKeys.includes(k))
  if (invalid.length) {
    return error(res, 400, `${invalid.join(', ')} is not valid keys`)
  }

  const updatedItem = { ...contact_expanded, ...req.body }
  const not_expanded = Object.assign({}, updatedItem)
  delete not_expanded['number1']
  delete not_expanded['number2']
  delete not_expanded['birthday']

  db.get('contacts').find({ id }).assign(not_expanded).write()
  db.get('contacts_expanded').find({ id }).assign(updatedItem).write()

  res.send(updatedItem)
}

const deleteItem = (req, res) => {
  const { id } = req.params
  const item = db.get('contacts').find({ id }).value()
  const item_expanded = db.get('contacts_expanded').find({ id }).value()
  if (!item || !item_expanded) return error(res, 404, 'cannot find contacts with this id')

  db.get('contacts').remove({ id }).write()
  db.get('contacts_expanded').remove({ id }).write()
  
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