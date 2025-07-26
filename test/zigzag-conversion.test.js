import { expect } from 'chai'

import { zigZagConversion } from '../zigzag-conversion/index.js'

describe('zig zag conversion', () => {
  it('returns expected value', () => {
    expect(zigZagConversion('A', 1)).to.equal('A')
    expect(zigZagConversion('PAYPALISHIRING', 3)).to.equal('PAHNAPLSIIGYIR')
    expect(zigZagConversion('PAYPALISHIRING', 4)).to.equal('PINALSIGYAHRPI')
  })
})