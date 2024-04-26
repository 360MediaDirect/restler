import awsServerlessExpressMiddleware from 'aws-serverless-express/middleware'
import { Middleware } from '../types'

const apiGateway = (): Middleware => {
  const readContext = awsServerlessExpressMiddleware.eventContext()
  return (req, res, next) => {
    if (req.get('x-apigateway-event') || req.get('x-apigateway-context')) {
      readContext(req, res, next)
    } else next()
  }
}

export default apiGateway
