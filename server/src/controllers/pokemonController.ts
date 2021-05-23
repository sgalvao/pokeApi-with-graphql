import {Request, Response } from 'express'
import {pokemonService} from '../service/pokemonService'
import {pokemon} from '../mock'

class pokemonController {

    static getPokemons = async (req: Request, res: Response) => {

        let {limit, offset}  = req.query

        let pokemons = await pokemonService.fetchAllPokemons({limit, offset})

        res.send(pokemons)
    }

    static mock = (req: Request, res: Response) => {
        res.json(pokemon)
    }

}

export {pokemonController}
