/**
 * @description Validates a given string composed of only (, ), {, }, [,] chars
 * @param {String} str
 * @returns {Boolean}
 */
import { Stack } from '../helpers/stack.js'

export function validateString (str) {
  const bracketPairs = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ])

  const stack = new Stack()

  for (let char of str) {
    if (stack.peek() && bracketPairs.get(stack.peek()) === char) {
      stack.pop()
    } else {
      stack.push(char)
    }
  }

  return stack.isEmpty()
}