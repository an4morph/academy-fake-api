const { allDishes, breakfasts, hotDishes, soups, deserts, salads } = require('./dishes')

const getByIndex = (arr, indexes) => arr.filter((_, index) => indexes.includes(index))

module.exports = {
  places: [
    {
      id: '4g4joeu70',
      name: 'Трактир "Пушкин"',
      cuisine: 'Европейская',
      currency: '₽',
      img: 'https://images.unsplash.com/photo-1554998171-89445e31c52b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1710&q=80',
    },
    {
      id: '41111kkd71',
      name: 'Fit slim',
      cuisine: 'Здоровое питание',
      currency: 'сом',
      img: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1790&q=80',
    },
    {
      id: '21hyGGDet2',
      name: 'Сamomile coffee',
      cuisine: 'Итальянская, французская',
      currency: 'сом',
      img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    },
    {
      id: 'JDruhj47hf',
      name: 'Сamomile coffee',
      cuisine: 'Eвропейская, средне-азиатская',
      currency: 'сом',
      img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    },
  ],
  dishes: [
    {
      id: '2321',
      placeId: '4g4joeu70',
      dishes: allDishes
    },
    {
      id: '4234',
      placeId: '41111kkd71',
      dishes: [
        ...getByIndex(breakfasts, [0,2,4,5]),
        ...getByIndex(hotDishes, [0,2,3,4]),
        ...soups,
        ...salads,
        ...getByIndex(deserts, [3,4])
      ]
    },
    {
      id: '6544',
      placeId: '21hyGGDet2',
      dishes: [
        ...getByIndex(breakfasts, [1,2,3]),
        ...getByIndex(hotDishes, [1,2,3,4]),
        ...getByIndex(soups, [0,1,3,4]),
        ...getByIndex(salads, [0,1,3,4]),
        ...getByIndex(deserts, [0,1,3,4])
      ]
    },
    {
      id: '3473',
      placeId: 'JDruhj47hf',
      dishes: [
        ...getByIndex(breakfasts, [0,1,2]),
        ...getByIndex(hotDishes, [0,2,3,4]),
        ...getByIndex(soups, [0,1,2,3]),
        ...getByIndex(salads, [1,2,4,5]),
        ...deserts
      ]
    },
  ]
}