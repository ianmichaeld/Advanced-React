require('dotenv').config({ path: 'variables.env' })
const createServer = require('createServer')
const db = require('./db')

const server = createServer()

server.start(
  {
    cors: {
      credentials: true,
      origin: process.env.FRONTEND_URL
    }
  },
  DEETS => {
    console.log(`Server is now rinning on port http:/localhost?${deets.port}`)
  }
)
