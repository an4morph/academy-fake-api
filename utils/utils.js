const { NAMES, SURNAMES } = require('./data')

const rand = (min, max) => Math.round(Math.random() * (max - min) + min)
const getRandFromArr = (arr) => arr[rand(0, arr.length  - 1)]
const generateArr = (length, fromNum = 1) => Array(length).fill(0).map((_, index) => index + fromNum) 
const generateFullName = () => `${getRandFromArr(NAMES)} ${getRandFromArr(SURNAMES)}`

module.exports = {
  rand,
  getRandFromArr,
  generateArr,
  generateFullName
}