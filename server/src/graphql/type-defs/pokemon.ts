import { gql } from 'apollo-server-express'

export default gql`


  type Ability {
    name: String
    url: String
  }

  type Type {
    name: String

    url: String
  }

  type Types {
    type: Type
  }

  type Abilities {
    ability: Ability
  }

  type Sprite {
    back_default: String
    front_default: String
  }

  type Pokemon {
    name: String
    id: Int
    abilities: [Abilities]
    sprites: Sprite
    types: [Types]
  }

  type Query {
    mock: [Pokemon]

    pokemon(limit: Int, offset: Int): [Pokemon]
  }
`
