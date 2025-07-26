/**
 * @description Performs zig zag conversion on a given string value
 * @param {String} value
 * @param {number} numRows
 * @returns {String}
 */
export function zigZagConversion (value, numRows) {
  if (numRows === 1) return value

  const chars = value.split('')
  const numCols = chars.length

  const matrix = Array.from({ length: numRows }, () => Array(numCols).fill(''))
  let isVertical = true
  let isDiagonal = false
  let lastPopulatedRow
  let lastPopulatedCol
  let converted = ''

  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows; row++) {
      const x = isVertical ? 'vertical' : 'diagonal'
      if (isVertical && !!chars.length) {
        matrix[row][col] = chars.shift()
        lastPopulatedRow = row
        lastPopulatedCol = col
        if (row === numRows - 1) {
          isVertical = false
          isDiagonal = true
        }
      } else if (isDiagonal && !!chars.length) {
        if (lastPopulatedRow !== undefined && lastPopulatedCol !== undefined && row === lastPopulatedRow - 1 && col === lastPopulatedCol + 1) {
          matrix[row][col] = chars.shift()
          lastPopulatedRow = row
          lastPopulatedCol = col
        }

        if (lastPopulatedRow === 0) {
          isDiagonal = false
          isVertical = true
        }
      }
    }
  }

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      converted += matrix[row][col]
    }
  }
  
  return converted
}