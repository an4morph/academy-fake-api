const main = [
  {
    id: '4g4jeeu74',
    name: 'Rainbow donuts',
    image: 'https://images.unsplash.com/photo-1556913396-7a3c459ef68e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1480&q=80',
    ingredients: ['3 eggs', 'chocolate', 'sugar', 'almond milk', 'olive oil', 'flour'],
    inStock: 21,
    cost: 2.55,
  },
  {
    id: '555eeu74',
    name: 'Sweet cinnabons',
    image: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80',
    ingredients: ['2 eggs', 'cream', 'sugar', 'oat milk', 'oil', 'flour', 'coconut'],
    inStock: 5,
    cost: 2.05,
  },
  {
    id: '843njk7fh',
    name: 'Mockaroon',
    image: 'https://images.unsplash.com/photo-1548848221-0c2e497ed557?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80',
    ingredients: ['chocolate', 'sugar', 'coconut water', 'flour', 'cacao beans'],
    inStock: 115,
    cost: 1.99,
  },
  {
    id: '33812hdjdd',
    name: 'Choco cookies',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80',
    ingredients: ['chocolate', 'sugar', 'flour', 'cacao beans', 'oat', 'egg'],
    inStock: 288,
    cost: 5.00,
  },
  {
    id: '93jfhjyyyuw1',
    name: 'M&Ms cookies',
    image: 'https://images.unsplash.com/photo-1601925762419-4d83d9bcd952?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=716&q=80',
    ingredients: ['chocolate', 'sugar', 'flour', 'cacao beans', 'oat', 'egg'],
    inStock: 18,
    cost: 4.00,
  },
  {
    id: '54y3iu44',
    name: 'Berry Cake',
    image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=670&q=80',
    ingredients: ['chocolate', 'berries', 'flour', 'cacao beans', 'oat', 'egg'],
    inStock: 0,
    cost: 10.00,
  },
  {
    id: '438hjjhk84',
    name: 'M&Ms Cake',
    image: 'https://images.unsplash.com/photo-1557979619-445218f326b9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
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