import { Stack } from '../helpers/stack.js'

/**
 * @description Given n non-negative integers representing an elevation map where the width of each bar is 1, computes how much water it can trap after raining
 * @param {Array[number]} height
 * @returns {Number}
 */
export function trap (height) {
  const stack = new Stack()
  let trappedWaterBlocks = 0
  let currentTowerI = 0

  while (currentTowerI < height.length) {
    while (!stack.isEmpty() && height[currentTowerI] > height[stack.peek()]) {
      let poppedTowerI = stack.pop()
      if (!stack.isEmpty()) {
        trappedWaterBlocks += (currentTowerI - stack.peek() - 1) * (Math.min(height[currentTowerI], height[stack.peek()]) - height[poppedTowerI])
      }
    }
    stack.push(currentTowerI)
    currentTowerI++
  }

  return trappedWaterBlocks
}
