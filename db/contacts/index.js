const utils = require('../../utils/utils')
const shortid = require("shortid")

const { rand, generateArr, generateFullName } = utils

const generateContact = () => ({
  id: shortid.generate(),
  name: generateFullName(),
  number1: rand(1000000000, 99999999999).toString(),
  number2: rand(1000000000, 99999999999).toString(),
  birthday: new Date(rand(1950, 2010), rand(0, 11), rand(1, 31)).toISOString()
})

const expanded = generateArr(25).map(generateContact)

module.exports = {
  main: expanded.map(({ id, name }) => ({ id, name })),
  expanded
}