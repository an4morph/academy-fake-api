const express = require('express')
const app = express()
const port = 1717
const defaultData = require('./db/defaultData')
const cors = require('cors')
const auth = require('./routes/auth')
const pastry = require('./routes/pastry')
const books = require('./routes/books')
const db = require('./db')

app.use(cors())
db.defaults(defaultData).write()

app.use(express.json()) 

app.get('/me', auth.me)
app.post('/login', auth.login)
app.post('/signin', auth.signin)

app.get('/pastry', pastry.getAll)
app.post('/pastry/create', pastry.createNew)

app.get('/books', books.getAll)
app.post('/books/create', books.createNew)
app.put('/books/update/:id', books.updateItem)
app.delete('/books/delete/:id', books.deleteItem)

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))