const db = require('../db')

const getPlaces = (req, res) => {
  const places = db.get('eats_places')
  res.send(places)
}

const getDishes = (req, res) => {
  const dishes = db.get('eats_dishes').find({ placeId: req.params.placeId })
  res.send(dishes.value().dishes)
}

module.exports = {
  getPlaces,
  getDishes
}