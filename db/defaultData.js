const pastry = require('./pastry')
const books = require('./books')
const eats = require('./eats')

module.exports = {
  users: [
    {
      token: 'token_bhje73bkj38jlds9',
      data: {
        username: 'admin',
        firstName: 'John',
        age: 18,
      },
      auth: {
        username: 'admin',
        password: '1234',
      }
    }
  ],
  pastry: pastry.main,
  pastry_expanded: pastry.expanded,
  books: books.main,
  books_expanded: books.expanded,
  eats_places: eats.places,
  eats_dishes: eats.dishes,
}