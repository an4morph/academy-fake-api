const db = require('../db')
const shortid = require('shortid')
const error = (res, status, text) => res.status(status).json(text).end()
const rand = (min, max) => Math.round(Math.random() * (max - min) + min)

const getSubject = (req, res) => {
  const data = db.get(`students_${req.params.subject}`).value()
  setTimeout(() => {
    if (!data) return error(res, 404, 'subject not found')
    if (rand(0, 100) % 4 === 0) return error(res, 500, 'Fake Server Error')
    res.send(data)
  }, rand(2000, 4000))
}

module.exports = {
  getSubject
}