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

  if (typeof name !== 'string') return error(res, 400, 'name attribute should be type `string`')
  if (typeof author !== 'string') return error(res, 400, 'author attribute should be type `string`')
  if (isFavorite && typeof isFavorite !== 'boolean') return error(res, 400, 'isFavorite attribute should be type `boolean`')
  if (publishYear && typeof publishYear !== 'number') return error(res, 400, 'publishYear attribute should be type `number`')
  if (publishHouse && typeof publishHouse !== 'boolean') return error(res, 400, 'publishHouse attribute should be type `string`')
  if (pagesNumber && typeof pagesNumber !== 'number') return error(res, 400, 'pagesNumber attribute should be type `number`')
  if (genres && !Array.isArray(genres)) return error(res, 400, 'genres attribute should be type `array`')
  if (originalLanguage && typeof originalLanguage !== 'string') return error(res, 400, 'originalLanguage attribute should be type `string`')

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
  const { name, author, isFavorite, publishYear, publishHouse, pagesNumber, genres, originalLanguage } = req.body
  const permisbleKeys = 'name, author, isFavorite, publishYear, publishHouse, pagesNumber, genres, originalLanguage'.split(', ')

  const book = db.get('books').find({ id }).value()
  const book_expanded = db.get('books_expanded').find({ id }).value()
  if (!book || !book_expanded) return error(res, 404, 'cannot find book with this id')

  const keys = Object.keys(req.body)
  const invalid = keys.filter(k => !permisbleKeys.includes(k))
  if (invalid.length) {
    return error(res, 400, `${invalid.join(', ')} is not valid keys`)
  }

  if (name && typeof name !== 'string') return error(res, 400, 'name attribute should be type `string`')
  if (author && typeof author !== 'string') return error(res, 400, 'author attribute should be type `string`')
  if (isFavorite && typeof isFavorite !== 'boolean') return error(res, 400, 'isFavorite attribute should be type `boolean`')
  if (publishYear && typeof publishYear !== 'number') return error(res, 400, 'publishYear attribute should be type `number`')
  if (publishHouse && typeof publishHouse !== 'boolean') return error(res, 400, 'publishHouse attribute should be type `string`')
  if (pagesNumber && typeof pagesNumber !== 'number') return error(res, 400, 'pagesNumber attribute should be type `number`')
  if (genres && !Array.isArray(genres)) return error(res, 400, 'genres attribute should be type `array`')
  if (originalLanguage && typeof originalLanguage !== 'string') return error(res, 400, 'originalLanguage attribute should be type `string`')

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