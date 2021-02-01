const db = require('../db')
const shortid = require('shortid')
const error = (res, status, text) => res.status(status).json(text).end()

const getAll = (req, res) => {
  const books = db.get('books')
  res.send(books)
}

const getItem = (req, res) => {
  const { id } = req.params
  const book = db.get('books_expanded').find({ id }).value()
  if (!book) return error(res, 404, 'cannot find book with this id')
  res.send(book)
}

const createNew = (req, res) => {
  const { name, author, isFavorite, publishYear, publishHouse, pagesNumber, genres, originalLanguage } = req.body
  if (!name) return error(res, 400, '`name` attribute is required')
  if (!author) return error(res, 400, '`author` attribute is required')

  const newBook = { 
    name,
    author,
    id: shortid.generate(),
    isFavorite: isFavorite || false,
    publishYear: publishYear || null,
    publishHouse: publishHouse || null, 
    pagesNumber: pagesNumber || 0,
    genres: genres || [],
    originalLanguage: originalLanguage || null
  }

  db.get('books').push(newBook).write()
  db.get('books_expanded').push(newBook).write()
  res.send(newBook)
}

const updateItem = (req, res) => {
  const { id } = req.params
  const permisbleKeys = 'name, author, isFavorite, publishYear, publishHouse, pagesNumber, genres, originalLanguage'.split(', ')

  const book = db.get('books').find({ id }).value()
  const book_expanded = db.get('books_expanded').find({ id }).value()
  if (!book || !book_expanded) return error(res, 404, 'cannot find book with this id')

  const keys = Object.keys(req.body)
  const invalid = keys.filter(k => !permisbleKeys.includes(k))

  if (invalid.length) {
    return error(res, 400, `${invalid.join(', ')} is not valid keys`)
  }

  const updatedBook = { ...book, ...req.body }

  db.get('books').find({ id }).assign(updatedBook).write()
  db.get('books_expanded').find({ id }).assign(updatedBook).write()

  res.send(updatedBook)
}

const deleteItem = (req, res) => {
  const { id } = req.params
  const book = db.get('books').find({ id }).value()
  const book_expanded = db.get('books_expanded').find({ id }).value()
  if (!book || !book_expanded) return error(res, 404, 'cannot find book with this id')

  db.get('books').remove({ id }).write()
  db.get('books_expanded').remove({ id }).write()
  res.send('successful delete')
}

module.exports = {
  getAll,
  getItem,
  createNew,
  updateItem,
  deleteItem
}