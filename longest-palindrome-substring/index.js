import { recursiveReverse } from '../recursive-reverse/index.js'

/**
 * @description Gets the longest palindrome substring, returns first result if multiple same-size found
 * @param {String} str
 */
export function getLongestPalindromeSubstring (str) {
  if (recursiveReverse(str) === str) return str

  let windowSize = str.length - 1
  const minPalindromeSize = 2

  while (windowSize >= minPalindromeSize) {
    const slice = recursiveGetKSizedPossiblePalindromes(str, windowSize)
    if (!!slice) return slice

    windowSize--
  }

  return undefined
}

/**
 * @description Gets k-sized substrings in a recursive manner
 * @param {String} str
 * @param {Number} k
 */
function recursiveGetKSizedPossiblePalindromes (str, k) {
  const slice = str.slice(0, k)

  if (slice.length !== k) return undefined
  if (recursiveReverse(slice) === slice) return slice

  return recursiveGetKSizedPossiblePalindromes(str.substring(1), k)
}