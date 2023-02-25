const utils = require('../../utils/utils')
const shortid = require("shortid")

const { rand, getRandFromArr, generateArr, generateFullName } = utils

const generateLevel = () => {
  const letters = 'A, B, C, D, E, F, G'.split(', ')
  return `${getRandFromArr(letters)}${rand(1, 7)}`
}
const generateScore = () => rand(30, 100)

const generateStudent = () => ({
  id: shortid.generate(),
  name: generateFullName(),
  score: generateScore(),
  level: generateLevel(),
})

module.exports = {
  math: generateArr(25).map(generateStudent),
  physics: generateArr(30).map(generateStudent),
  chemistry: generateArr(12).map(generateStudent),
  biology: generateArr(80).map(generateStudent),
}