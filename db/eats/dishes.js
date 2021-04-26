const breakfasts = [
  {
    id: 'HuywGG6e3',
    name: 'Яичница глазунья',
    img: 'https://images.unsplash.com/photo-1594629490425-b85f054b39ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    desc: 'На выбор: с курицей, с беконом, с овощами или с грибами',
    price: 160,
    category: 'Завтраки'
  },
  {
    id: 'HDuyjhJH&4',
    name: 'Панкейки',
    img: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    desc: null,
    price: 220,
    category: 'Завтраки'
  },
  {
    id: 'UYdjeu766',
    name: 'Гренки с яйцом',
    img: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    desc: '3 штуки',
    price: 125,
    category: 'Завтраки'
  },
  {
    id: 'rtTRG7hH',
    name: 'Овсяная каша с ягодами',
    img: 'https://images.unsplash.com/photo-1587678711204-ca6d3d2f1f3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    desc: null,
    price: 200,
    category: 'Завтраки'
  },
  {
    id: 'KKDyhdeju9',
    name: 'Смузи боул',
    img: 'https://images.unsplash.com/photo-1588199318353-9d947efbff64?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    desc: 'Любое растительное молоко на выбор',
    price: 270,
    category: 'Завтраки'
  },
  {
    id: '7djkhJJhgf',
    name: 'Фруктовое ассорти',
    img: 'https://images.unsplash.com/photo-1478144592103-25e218a04891?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1568&q=80',
    desc: null,
    price: 200,
    category: 'Завтраки'
  },
] // 6
const hotDishes = [
  {
    id: '764huhhfew',
    name: 'Спагетти с грибами',
    img: 'https://images.unsplash.com/photo-1603570416072-84068a0f1358?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    desc: null,
    price: 240,
    category: 'Горячие блюда'
  },
  {
    id: 'AqGiHdppe',
    name: 'Стейк из семги',
    img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    desc: null,
    price: 550,
    category: 'Горячие блюда'
  },
  {
    id: 'NNDjdyeLLDJ',
    name: 'Фрикассе',
    img: 'https://images.unsplash.com/photo-1564671165093-20688ff1fffa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=688&q=80',
    desc: null,
    price: 300,
    category: 'Горячие блюда'
  },
  {
    id: 'JhduHG9we',
    name: 'Рыба под тыквенным соусом',
    img: 'https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
    desc: null,
    price: 540,
    category: 'Горячие блюда'
  },
  {
    id: 'NsloKJ87d',
    name: 'Куриная грудка с овощами',
    img: 'https://images.unsplash.com/photo-1572424117831-005b5e9b3ae4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    desc: null,
    price: 400,
    category: 'Горячие блюда'
  },
] // 5
const soups = [
  {
    id: 'Uddhey33h',
    name: 'Томатный суп',
    img: 'https://images.unsplash.com/photo-1578020190125-f4f7c18bc9cb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    desc: null,
    price: 150,
    category: 'Супы'
  },
  {
    id: 'keYU7ducccd',
    name: 'Чечевичный суп',
    img: 'https://images.unsplash.com/photo-1605909388460-74ec8b204127?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    desc: null,
    price: 180,
    category: 'Супы'
  },
  {
    id: 'POdbde93',
    name: 'Французский сырный суп',
    img: 'https://images.unsplash.com/photo-1602563388144-9a37442e6e42?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
    desc: null,
    price: 110,
    category: 'Супы'
  },
  {
    id: 'slhHGT73hdj',
    name: 'Крем суп из шампиньонов',
    img: 'https://images.unsplash.com/photo-1610725663727-08695a1ac3ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    desc: null,
    price: 200,
    category: 'Супы'
  },
] // 4
const deserts = [
  {
    id: '36hDgyehje2',
    name: 'Шоколадное печенье',
    img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZGVzc2VydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
    desc: '150 гр',
    price: 150,
    category: 'Десерты'
  },
  {
    id: '37IuiejKKd',
    name: 'Банановый кекс',
    img: 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
    desc: null,
    price: 80,
    category: 'Десерты'
  },
  {
    id: 'NDUEH74',
    name: 'Сладкие блинчики',
    img: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1570&q=80',
    desc: null,
    price: 170,
    category: 'Десерты'
  },
  {
    id: 'Huhjke7367b',
    name: 'Фруктово-ягодный сорбет',
    img: 'https://images.unsplash.com/photo-1488900128323-21503983a07e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
    desc: 'Малина, клубника, брусника, голубика, арбуз, дыня, апельсин',
    price: 120,
    category: 'Десерты'
  },
  {
    id: 'skoEHH74',
    name: 'Пончики в глазури',
    img: 'https://images.unsplash.com/photo-1556913396-7a3c459ef68e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1640&q=80',
    desc: null,
    price: 130,
    category: 'Десерты'
  },
] // 5
const salads = [
  {
    id: '74HJhjkruJKD',
    name: 'Веган боул (овощной)',
    img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
    desc: null,
    price: 200,
    category: 'Салаты'
  },
  {
    id: 'LOEW&HDh4u',
    name: 'Салат с курицей и рукколой',
    img: 'https://images.unsplash.com/photo-1604909052743-94e838986d24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80',
    desc: null,
    price: 220,
    category: 'Салаты'
  },
  {
    id: 'HD74hjkH7D',
    name: 'Зеленый салат',
    img: 'https://images.unsplash.com/photo-1572449043416-55f4685c9bb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1100&q=80',
    desc: null,
    price: 140,
    category: 'Салаты'
  },
  {
    id: 'HDrkjueiuj',
    name: 'Греческий',
    img: 'https://images.unsplash.com/photo-1612298697520-ba96a60412e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=668&q=80',
    desc: null,
    price: 170,
    category: 'Салаты'
  },
  {
    id: 'TDFEgetgf3',
    name: 'Свежий салат с вяленными томатами',
    img: 'https://images.unsplash.com/photo-1537785713284-0015ce8a145c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1650&q=80',
    desc: null,
    price: 180,
    category: 'Салаты'
  },
  {
    id: 'Podneu83',
    name: 'Цезарь',
    img: 'https://images.unsplash.com/photo-1580013759032-c96505e24c1f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1125&q=80',
    desc: null,
    price: 280,
    category: 'Салаты'
  },
] // 6

const allDishes = [
  ...breakfasts,
  ...hotDishes,
  ...soups,
  ...deserts,
  ...salads
]

module.exports = {
  allDishes,
  breakfasts,
  hotDishes,
  soups,
  deserts,
  salads
}