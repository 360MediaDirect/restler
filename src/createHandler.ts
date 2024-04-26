import { AppOptions } from './types'
import { APIGatewayProxyHandler } from 'aws-lambda'
import { createApp } from './createApp'
import * as awsServerlessExpress from 'aws-serverless-express'

export const createHandler = (opts: AppOptions): APIGatewayProxyHandler => {
  const app = createApp(opts)
  const server = awsServerlessExpress.createServer(app)
  return (event, context) => {
    awsServerlessExpress.proxy(server, event, context)
  }
}
