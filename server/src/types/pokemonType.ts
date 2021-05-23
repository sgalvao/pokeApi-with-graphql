interface IPokemon {

    id: number;

    name: string;

    abilities?: Abilities[];

    sprites: Sprite;

    types?: Type[];

}

interface ITinyPokemon {

    name: string;

    url: string;

}

type Abilities = {
  ability:{
    name: string;

    url: string;
  }

}

type Sprite = {

    back_default?: string;
    front_default: string;

}

type Type = {
    type:{
        name: string;

        url: string;
    }
}


export { IPokemon, ITinyPokemon }

