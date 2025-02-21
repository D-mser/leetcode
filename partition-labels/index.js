/**
 * @description Partitions the given string into as many parts as possible so that each letter appears in at most one part
 * @param {String} str
 * @returns {Array<Number>}
 */
export function partitionLabels (str) {
  const map = new Map()

  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], [i, i])
    } else {
      map.set(str[i], [map.get(str[i])[0], i])
    }
  }

  const partitions = mergeIntervals(Array.from(map.values()))

  if (partitions.length === 1) return []

  return partitions.map(p => p[1] - p[0] + 1)
}

/**
 * @description Merges overlapping intervals
 * @param {Array} intervals
 * @returns {Array}
 */
function mergeIntervals (intervals) {
  if (!intervals.length) return []

  intervals.sort((a, b) => a[0] - b[0])

  const merged = []
  let current = intervals[0]

  for (let i = 1; i < intervals.length; i++) {
    let next = intervals[i]

    if (current[1] >= next[0]) {
      current = [current[0], Math.max(current[1], next[1])]
    } else {
      merged.push(current)
      current = next
    }
  }

  merged.push(current)
  return merged
}