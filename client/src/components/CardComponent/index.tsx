import { Card, PokeImg, PokeName, PokeAbbility } from './styles';
import { IPokemon } from '../../types/pokemon-types';

export default function CardComponent({ name, sprites, types }: IPokemon) {
    return (
        <Card>
            <PokeName> {name} </PokeName>
            <PokeImg>
                <img src={sprites.front_default} alt="Pokemon Image" />
            </PokeImg>
            <PokeAbbility> {types[0].type.name} </PokeAbbility>
        </Card>
    );
}
