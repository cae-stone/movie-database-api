import express from 'express'
import request from 'superagent'

const apikey = process.env.API_KEY_OMDB


const router = express.Router()

router.get('/:movie', async (req, res) => {
  try {
    const movie = req.params.movie
    const response = await request.get(
      `https://www.omdbapi.com/?apikey=${apikey}&t=${movie}`
    )
    return res.json(response.body)
  } catch (error) {
    res.sendStatus(500).send('Movie not found!')
  }
})

export default router
