const util = require('util')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const invariant = (condition, message) => {
  if (condition) {
    throw new Error(message)
  }
}

const benchmark = (cb, label) => {
  console.time(label)
  const result = cb()
  console.timeEnd(label)
  return result
}

const getQuestion = () => {
  return util.promisify(rl.question).bind(rl)
}

module.exports = {
  invariant,
  benchmark,
  getQuestion,
}
