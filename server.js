const express = require('express')
const app = express()
const port = 1717
const defaultData = require('./db/defaultData')
const cors = require('cors')
const auth = require('./routes/auth')
const pastry = require('./routes/pastry')
const books = require('./routes/books')
const eats = require('./routes/eats')
const students = require('./routes/students')
const db = require('./db')

app.use(cors())
db.defaults(defaultData).write()

app.use(express.json()) 

app.get('/me', auth.me)
app.post('/login', auth.login)
app.post('/signin', auth.signin)

app.get('/pastry', pastry.getAll)
app.get('/pastry/detail/:id', pastry.getItem)
app.post('/pastry/create', pastry.createNew)
app.put('/pastry/update/:id', pastry.updateItem)
app.delete('/pastry/delete/:id', pastry.deleteItem)

app.get('/books', books.getAll)
app.get('/books/detail/:id', books.getItem)
app.post('/books/create', books.createNew)
app.put('/books/update/:id', books.updateItem)
app.delete('/books/delete/:id', books.deleteItem)

app.get('/eats/places', eats.getPlaces)
app.get('/eats/dishes/:placeId', eats.getDishes)

app.get('/students/:subject', students.getSubject)
app.post('/students/:subject/add', students.addStudent)

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))