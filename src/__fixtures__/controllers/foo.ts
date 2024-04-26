import { createController } from '../../createController'

export const getFoo = createController((req, res) => {
  res.json({ id: req.params.id })
})

export const getAllFoo = createController((_req, res) => {
  res.json({ controller: 'getAllFoo' })
})

export const createFoo = createController((_req, res) => {
  res.json({ controller: 'createFoo' })
})
