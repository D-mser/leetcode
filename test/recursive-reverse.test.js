import { expect } from 'chai'

import { recursiveReverse } from '../recursive-reverse/index.js'

describe('reverses a string recursively', () => {
  it('should reverse pisica to acisip', function () {
    expect(recursiveReverse('pisica')).to.equal('acisip')
  })

  it('should reverse longest word in english', function () {
    expect(recursiveReverse('pneumonoultramicroscopicsilicovolcanoconiosis')).to.equal('sisoinoconaclovociliscipocsorcimartluonomuenp')
  })
})