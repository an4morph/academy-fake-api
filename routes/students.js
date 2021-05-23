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

const addStudent = (req, res) => {
  const { name, level, score } = req.body
  setTimeout(() => {
    if (!name) return error(res, 400, 'name attribute is required')
    if (!level) return error(res, 400, 'level attribute is required')
    if (!score) return error(res, 400, 'score attribute is required')
    if (rand(0, 100) % 4 === 0) return error(res, 500, 'Fake Server Error')

    const student = { id: shortid.generate(), name, level, score }

    db.get(`students_${req.params.subject}`).push(student).write()
    res.send(student)
  }, rand(2000, 4000))
}

module.exports = {
  getSubject,
  addStudent
}