const { benchmark } = require('../utils')
const { createRandomArray } = require('./utils')

class MyArray {
  lastActionResult
  constructor(size = 100) {
    this.array = benchmark(
      () => createRandomArray(size),
      'Array creating takes'
    )
  }

  search = cb => {
    this.clearLastActionResult()
    for (const iterator of this.array) {
      if (cb(iterator)) {
        this.#setLastActionResult(iterator)
        break
      }
    }

    return this
  }

  add = (addition, index = 0) => {
    let result = []

    for (const [key, arrValue] of this.array.entries()) {
      if (key === index) {
        result.push(addition, arrValue)
      } else {
        result.push(arrValue)
      }
    }

    if (result.length === this.array.length) {
      result.push(addition)
    }

    this.#setLastActionResult(result)
    this.array = result

    return this
  }

  deletion = value => {
    let result = []

    for (const arrValue of this.array) {
      if (arrValue !== value) {
        result.push(arrValue)
      }
    }

    this.#setLastActionResult(result)
    this.array = result

    return this
  }

  sort = () => {
    const result = this.array.sort((a, b) => a - b)
    this.#setLastActionResult(result)
    this.array = result

    return this
  }

  binarySearch = value => {
    let start = 0
    let end = this.array.length - 1

    while (start <= end) {
      let middle = Math.floor((start + end) / 2)

      if (this.array[middle] === value) {
        this.#setLastActionResult(middle)
        break
      } else if (this.array[middle] < value) {
        start = middle + 1
      } else {
        end = middle - 1
      }
    }
    return this
  }

  #setLastActionResult = value => {
    this.lastActionResult = value
  }

  clearLastActionResult = () => {
    this.lastActionResult = undefined
    return this
  }
}

module.exports = {
  MyArray,
}
