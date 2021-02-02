const main = [
  {
    id: '4g4jeeu74',
    name: 'Rainbow donuts',
    image: 'https://unsplash.com/photos/oMcRNDjUGik',
    ingredients: ['3 eggs', 'chocolate', 'sugar', 'almond milk', 'olive oil', 'flour'],
    inStock: 21,
  },
  {
    id: '555eeu74',
    name: 'Sweet cinnabons',
    image: 'https://unsplash.com/photos/uG3Vu5TXKxE',
    ingredients: ['2 eggs', 'cream', 'sugar', 'oat milk', 'oil', 'flour', 'coconut'],
    inStock: 5,
  },
  {
    id: '843njk7fh',
    name: 'Mockaroon',
    image: 'https://unsplash.com/photos/bzLhhI3MpYY',
    ingredients: ['chocolate', 'sugar', 'coconut water', 'flour', 'cacao beans'],
    inStock: 115,
  },
  {
    id: '33812hdjdd',
    name: 'Choco cookies',
    image: 'https://unsplash.com/photos/kID9sxbJ3BQ',
    ingredients: ['chocolate', 'sugar', 'flour', 'cacao beans', 'oat', 'egg'],
    inStock: 288,
  },
  {
    id: '93jfhjyyyuw1',
    name: 'M&Ms cookies',
    image: 'https://unsplash.com/photos/O57xs-cJbPY',
    ingredients: ['chocolate', 'sugar', 'flour', 'cacao beans', 'oat', 'egg'],
    inStock: 18,
  },
  {
    id: '54y3iu44',
    name: 'Berry Cake',
    image: 'https://unsplash.com/photos/_B7shfNUXEA',
    ingredients: ['chocolate', 'berries', 'flour', 'cacao beans', 'oat', 'egg'],
    inStock: 1,
  },
  {
    id: '438hjjhk84',
    name: 'M&Ms Cake',
    image: 'https://unsplash.com/photos/SxHxyNx-6YI',
    ingredients: ['chocolate', 'berries', 'flour', 'cacao beans', 'oat', 'egg'],
    inStock: 1,
  }
]

const expanded = [
  {
    id: '4g4jeeu74',
    name: 'Rainbow donuts',
    image: 'https://unsplash.com/photos/oMcRNDjUGik',
    ingredients: ['3 eggs', 'chocolate', 'sugar', 'almond milk', 'olive oil', 'flour'],
    inStock: 21,
    hasDelivery: false,
    address: {
      street: 'Santa-Louise',
      houseNumber: 12
    }
  },
  {
    id: '555eeu74',
    name: 'Sweet cinnabons',
    image: 'https://unsplash.com/photos/uG3Vu5TXKxE',
    ingredients: ['2 eggs', 'cream', 'sugar', 'oat milk', 'oil', 'flour', 'coconut'],
    inStock: 5,
    hasDelivery: true,
    address: {
      street: 'Lemon St',
      houseNumber: 5
    }
  },
  {
    id: '843njk7fh',
    name: 'Mockaroon',
    image: 'https://unsplash.com/photos/bzLhhI3MpYY',
    ingredients: ['chocolate', 'sugar', 'coconut water', 'flour', 'cacao beans'],
    inStock: 115,
    hasDelivery: false,
    address: {
      street: 'Prive Drive',
      houseNumber: 7
    }
  },
  {
    id: '33812hdjdd',
    name: 'Choco cookies',
    image: 'https://unsplash.com/photos/kID9sxbJ3BQ',
    ingredients: ['chocolate', 'sugar', 'flour', 'cacao beans', 'oat', 'egg'],
    inStock: 288,
    hasDelivery: true,
    address: {
      street: 'Bakers St',
      houseNumber: 221
    }
  },
  {
    id: '93jfhjyyyuw1',
    name: 'M&Ms cookies',
    image: 'https://unsplash.com/photos/O57xs-cJbPY',
    ingredients: ['chocolate', 'sugar', 'flour', 'cacao beans', 'oat', 'egg'],
    inStock: 18,
    hasDelivery: true,
    address: {
      street: '4-line',
      houseNumber: 35
    }
  },
  {
    id: '54y3iu44',
    name: 'Berry Cake',
    image: 'https://unsplash.com/photos/_B7shfNUXEA',
    ingredients: ['chocolate', 'berries', 'flour', 'cacao beans', 'oat', 'egg'],
    inStock: 1,
    hasDelivery: true,
    address: {
      street: 'Parkway',
      houseNumber: 200
    }
  },
  {
    id: '438hjjhk84',
    name: 'M&Ms Cake',
    image: 'https://unsplash.com/photos/SxHxyNx-6YI',
    ingredients: ['chocolate', 'berries', 'flour', 'cacao beans', 'oat', 'egg'],
    inStock: 1,
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