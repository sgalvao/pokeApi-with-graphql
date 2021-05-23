import {pokemon} from '../../mock'
import {pokemonService } from '../../service/pokemonService'

export default {
  Query: {
    mock:() => pokemon,

    pokemon: async(_, {limit, offset}) => { return await pokemonService.fetchAllPokemons({limit, offset}) }
  }
}

