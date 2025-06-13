import { expect } from 'chai'

import { trap } from '../trap-raining-water/index.js'

describe('trap raining water', () => {
  it('returns the expected volume of water', () => {
    expect(trap([5, 0, 5])).to.equal(5)
    expect(trap([1, 0, 1, 1, 3, 0, 3, 1, 0, 3])).to.equal(9)
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).to.equal(6)
    expect(trap([4, 2, 0, 3, 2, 5])).to.equal(9)
  })
})