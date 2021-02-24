const main = [
  {
    id: '4g4jeeu74',
    name: 'Rainbow donuts',
    image: 'https://unsplash.com/photos/oMcRNDjUGik',
    ingredients: ['3 eggs', 'chocolate', 'sugar', 'almond milk', 'olive oil', 'flour'],
    inStock: 21,
    cost: 2.55,
  },
  {
    id: '555eeu74',
    name: 'Sweet cinnabons',
    image: 'https://unsplash.com/photos/uG3Vu5TXKxE',
    ingredients: ['2 eggs', 'cream', 'sugar', 'oat milk', 'oil', 'flour', 'coconut'],
    inStock: 5,
    cost: 2.05,
  },
  {
    id: '843njk7fh',
    name: 'Mockaroon',
    image: 'https://unsplash.com/photos/bzLhhI3MpYY',
    ingredients: ['chocolate', 'sugar', 'coconut water', 'flour', 'cacao beans'],
    inStock: 115,
    cost: 1.99,
  },
  {
    id: '33812hdjdd',
    name: 'Choco cookies',
    image: 'https://unsplash.com/photos/kID9sxbJ3BQ',
    ingredients: ['chocolate', 'sugar', 'flour', 'cacao beans', 'oat', 'egg'],
    inStock: 288,
    cost: 5.00,
  },
  {
    id: '93jfhjyyyuw1',
    name: 'M&Ms cookies',
    image: 'https://unsplash.com/photos/O57xs-cJbPY',
    ingredients: ['chocolate', 'sugar', 'flour', 'cacao beans', 'oat', 'egg'],
    inStock: 18,
    cost: 4.00,
  },
  {
    id: '54y3iu44',
    name: 'Berry Cake',
    image: 'https://unsplash.com/photos/_B7shfNUXEA',
    ingredients: ['chocolate', 'berries', 'flour', 'cacao beans', 'oat', 'egg'],
    inStock: 0,
    cost: 10.00,
  },
  {
    id: '438hjjhk84',
    name: 'M&Ms Cake',
    image: 'https://unsplash.com/photos/SxHxyNx-6YI',
    ingredients: ['chocolate', 'berries', 'flour', 'cacao beans', 'oat', 'egg'],
    inStock: 1,
    cost: 15.20,
  }
]

const expanded = [
  {
    ...main[0],
    hasDelivery: false,
    address: {
      street: 'Santa-Louise',
      houseNumber: 12
    }
  },
  {
    ...main[1],
    hasDelivery: true,
    address: {
      street: 'Lemon St',
      houseNumber: 5
    }
  },
  {
    ...main[2],
    hasDelivery: false,
    address: {
      street: 'Prive Drive',
      houseNumber: 7
    }
  },
  {
    ...main[3],
    hasDelivery: true,
    address: {
      street: 'Bakers St',
      houseNumber: 221
    }
  },
  {
    ...main[4],
    hasDelivery: true,
    address: {
      street: '4-line',
      houseNumber: 35
    }
  },
  {
    ...main[5],
    hasDelivery: true,
    address: {
      street: 'Parkway',
      houseNumber: 200
    }
  },
  {
    ...main[6],
    hasDelivery: false,
    address: {
      street: '4-line',
      houseNumber: 35
    }
  }
]

module.exports = {
  main,
  expanded
}