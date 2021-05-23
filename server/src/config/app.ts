import express from 'express'
import cors from 'cors'

import { setupRoutes } from '../config/routes'
import { setupApolloServer } from '../config/apollo-server'

const app = express()

app.use(express.json())
app.use(cors())

setupApolloServer(app)
setupRoutes(app)


export default app
