import { IPokemon, ITinyPokemon } from '../types/pokemonType'
import axios from 'axios'
import { pokeApi } from '../api/pokeApi'

class pokemonService {

    static fetchAllPokemons = async ({limit, offset}) => {

        const response = await pokeApi.get(`pokemon?limit=${limit}&offset=${offset}`)

        let pokemons: ITinyPokemon[] = await response.data.results

        let newPokemons =  pokemons.map(async (pokemon) => {

            let newPokemon: IPokemon = await (await axios.get(pokemon.url)).data

            return newPokemon
        });

        return await Promise.all(newPokemons)
    }
}

export {pokemonService}
