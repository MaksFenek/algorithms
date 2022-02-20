const { checkNumber } = require('./utils')
const { MyArray } = require('./array')
const { getQuestion, invariant } = require('../utils')
const sections = require('./section')

const question = getQuestion()

const main = async () => {
  const size = checkNumber(await question('Please enter an array size: '))

  const array = new MyArray(size)

  console.log('\nCreated array:', array.array)

  const index = checkNumber(
    await question(`
  Choose an array method:
  1. Search a value
  2. Add value into array
  3. Delete value from array
  4. [sorted] Binary search
  `)
  )
  const method = Object.values(sections)[index - 1]

  invariant(typeof method === 'undefined', 'There is no such method')

  method(array)
}

main()
