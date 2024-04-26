import * as index from '../index'

describe('index', () => {
  it('exports core functions', () => {
    expect(index).toHaveProperty('createApp')
    expect(index).toHaveProperty('createController')
    expect(index).toHaveProperty('createHandler')
  })
})
