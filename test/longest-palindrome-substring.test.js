import { getLongestPalindromeSubstring } from '../longest-palindrome-substring/index.js'

import { expect } from 'chai'

describe('longest palindrome substring', () => {
  it('returns the longest palindrome substring', () => {
    expect(getLongestPalindromeSubstring('cbbd')).to.equal('bb')
    expect(getLongestPalindromeSubstring('efgacbbcad')).to.equal('acbbca')
  })

  it('returns the first result if multiple same-size substrings exist', () => {
    expect(getLongestPalindromeSubstring('babad')).to.equal('bab')
  })

  it('returns undefined if no palindromes found', () => {
    expect(getLongestPalindromeSubstring('abcd')).to.be.undefined
  })
})