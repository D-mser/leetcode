import { recursiveReverse } from '../recursive-reverse/index.js'

import { expect } from 'chai'

describe('reverses a string recursively', () => {
  it('should reverse pisica to acisip', function () {
    expect(recursiveReverse('pisica')).to.equal('acisip')
  })

  it('should reverse longest word in english', function () {
    expect(recursiveReverse('pneumonoultramicroscopicsilicovolcanoconiosis')).to.equal('sisoinoconaclovociliscipocsorcimartluonomuenp')
  })
})