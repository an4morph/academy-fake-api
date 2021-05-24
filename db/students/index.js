const shortid = require("shortid")

const names = 'James, John, Ginger, Alice, Sam, Nina, Glory, Helen, Henry, Ami, Annie, Ann, Rachel, Jiji, Olive, David, Dirk, Nevill, Lola, Andy, Wes, Harry, Monika, Karl, Carla, July, Samantha, Ivan, Rick, Tonny'.split(', ')
const surnames = 'Jonson, Scott, Black, Brown, Harris, Lee, Coltrain, Azovsky, Watson, Davidson, McGregor, McDonalds, Andersson, White, Grey, Gregory, Kliff, Fernando, Pitt, Frost, Ford, William, Ferris, Richi, Josef, Armstrong'.split(', ')

const rand = (min, max) => Math.round(Math.random() * (max - min) + min)
const getRandFromArr = (arr) => arr[rand(0, arr.length  - 1)]
const generateArr = (length, fromNum = 1) => Array(length).fill(0).map((_, index) => index + fromNum) 

const generateLevel = () => {
  const letters = 'A, B, C, D, E, F, G'.split(', ')
  return `${getRandFromArr(letters)}${rand(1, 7)}`
}
const generateName = () => `${getRandFromArr(names)} ${getRandFromArr(surnames)}`
const generateScore = () => rand(30, 100)

const generateStudent = () => ({
  id: shortid.generate(),
  name: generateName(),
  score: generateScore(),
  level: generateLevel(),
})

module.exports = {
  math: generateArr(25).map(generateStudent),
  physics: generateArr(30).map(generateStudent),
  chemistry: generateArr(12).map(generateStudent),
  biology: generateArr(80).map(generateStudent),
}