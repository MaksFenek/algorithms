const { invariant } = require('../utils')

const createRandomArray = (size = 100, min = 0, max = 100) => {
  return new Array(size)
    .fill(0)
    .map(() => Math.round(Math.random() * (max - min) + min))
}

const checkNumber = value => {
  invariant(
    isNaN(Number(value)) && typeof value !== 'number',
    'Value must be a number'
  )
  return Number(value)
}

module.exports = {
  createRandomArray,
  checkNumber,
}
