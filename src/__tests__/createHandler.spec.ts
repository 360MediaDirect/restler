import { createHandler } from '../createHandler'
import { getEmbassy } from '../__fixtures__/getEmbassy'
import path from 'path'

const specPath = path.resolve(__dirname, '../__fixtures__/openapi.yml')

describe('createHandler', () => {
  it('creates a handler without error', () => {
    const handler = createHandler({
      specPath,
      embassy: getEmbassy(),
      controllers: {},
    })
    expect(handler.length).toBeGreaterThanOrEqual(2)
  })
})
