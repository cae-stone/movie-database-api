import express from 'express'
import movie from './routes/movie'

const server = express()
server.use(express.json())

server.use('/api/v1/movie', movie)

export default server
