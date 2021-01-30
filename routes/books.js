const db = require('../db')
const shortid = require('shortid')
const error = (res, status, text) => res.status(status).json(text).end()

const getAll = (req, res) => {
  const books = db.get('books')
  res.send(books)
}

const createNew = (req, res) => {
  const { name, author, isFavorite } = req.body
  if (!name) return error(res, 400, 'name attribute is required')
  if (!author) return error(res, 400, 'author attribute is required')

  const newBook = { 
    name,
    author,
    id: shortid.generate(),
    isFavorite: isFavorite || false
  }

  db.get('books').push(newBook).write()
  res.send(newBook)
}

const updateItem = (req, res) => {
  const { id } = req.params
  const permisbleKeys = ['name', 'author', 'isFavorite']

  const book = db.get('books').find({ id }).value()
  if (!book) return error(res, 404, 'cannot find book with this id')

  const keys = Object.keys(req.body)
  const invalid = keys.filter(k => !permisbleKeys.includes(k))

  if (invalid.length) {
    return error(res, 400, `${invalid.join(', ')} is not valid keys`)
  }

  const updatedBook = { ...book, ...req.body }

  db.get('books')
    .find({ id })
    .assign(updatedBook).write()

  res.send(updatedBook)
}

const deleteItem = (req, res) => {
  const { id } = req.params
  const book = db.get('books').find({ id }).value()
  if (!book) return error(res, 404, 'cannot find book with this id')

  db.get('books').remove({ id }).write()
  res.send('successful delete')
}


module.exports = {
  getAll,
  createNew,
  updateItem,
  deleteItem
}