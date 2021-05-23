import express from 'express'
import {pokemonController} from '../controllers/pokemonController'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('REST Api online!')
})

router.get('/poke-mock', pokemonController.mock)

router.get('/pokemon', pokemonController.getPokemons);

export default router
