const { getQuestion, benchmark } = require('../utils')
const { checkNumber } = require('./utils')

const question = getQuestion()

const searchSection = async array => {
  const num = checkNumber(
    await question('\nPlease enter a number to search in an array: ')
  )

  benchmark(() => {
    array.search(item => item === num)
  }, 'Search takes')
  benchmark(() => {
    array.array.find(item => item === num)
  }, 'Native search takes')
  console.log('Found value: ', array.lastActionResult)
}

const additionSection = async array => {
  const addition = checkNumber(
    await question('\nPlease enter a number to add into an array: ')
  )
  const index = checkNumber(await question('Please enter an index: '))

  benchmark(() => {
    array.add(addition, index)
  }, 'Addition takes')

  const newArr = [...array.array]
  benchmark(() => {
    newArr.splice(4, 0, addition)
  }, 'Native insert takes')

  console.log('Array after addition: ', array.lastActionResult)
}

const deletionSection = async array => {
  const del = checkNumber(
    await question('\nPlease enter a number to delete from an array: ')
  )

  benchmark(() => {
    array.deletion(del)
  }, 'Deleting takes')
  benchmark(() => {
    array.array.filter(item => item !== del)
  }, 'Native deleting takes')

  console.log('Array after deletion: ', array.lastActionResult)
}

const binarySearchSection = async array => {
  const num = checkNumber(
    await question('\nPlease enter a number to search in an array: ')
  )
  array.sort()

  benchmark(() => {
    array.binarySearch(num)
  }, 'Binary search takes')

  console.log('Found value index: ', array.lastActionResult)
}

module.exports = {
  searchSection,
  additionSection,
  deletionSection,
  binarySearchSection,
}
