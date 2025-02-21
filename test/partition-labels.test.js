import { expect } from 'chai'
import { partitionLabels } from '../partition-labels/index.js'

describe('partition labels', () => {
  it('partitions strings so that each letter appears in at most one part', () => {
    expect(partitionLabels('ababcbacadefegdehijhklij')).to.deep.equal([9, 7, 8])
    expect(partitionLabels('eccbbbbdec')).to.deep.equal([])
    expect(partitionLabels('ababcc')).to.deep.equal([4, 2])
  })
})