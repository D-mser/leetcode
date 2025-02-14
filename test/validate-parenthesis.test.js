import { expect } from 'chai'

import { validateString } from '../valid-parenthesis/index.js'

describe('validates a string based on brackets rules', () => {
  it('validates', function () {
    expect(validateString('()[]{}')).to.be.true
    expect(validateString('[[]{}[]]')).to.be.true
    expect(validateString('([])')).to.be.true
    expect(validateString('[[{}]]')).to.be.true
  })
  it('invalidates', function () {
    expect(validateString('(]')).to.be.false
    expect(validateString('[[[{]]}]')).to.be.false
  })
})