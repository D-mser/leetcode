/**
 * @description Function that recursively reverses a string
 * @param {String} str
 * @param {Number} [index]
 * @returns {String}
 */
export function recursiveReverse (str, index) {
  if (index === undefined) index = str.length - 1

  if (index < 0) return ''

  return str[index] + recursiveReverse(str, index - 1)
}