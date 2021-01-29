const express = require('express')
const app = express()
const port = 1717
const defaultData = require('./db/defaultData')
const cors = require('cors')
const auth = require('./routes/auth')
const db = require('./db')

app.use(cors())
db.defaults(defaultData).write()

app.use(express.json()) 

app.get('/me', auth.me)
app.post('/login', auth.login)
app.post('/signin', auth.signin)


app.listen(port, () => console.log(`App listening at http://localhost:${port}`))