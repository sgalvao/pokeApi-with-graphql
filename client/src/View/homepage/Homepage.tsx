import { useEffect, useState } from 'react';
import { Container, CarouselWrapper } from './styles';
import CardComponent from '../../components/CardComponent/CardComponent';
import HeaderComponent from '../../components/Header/HeaderComponent';
import Carousel from 'react-elastic-carousel';
import client from '../../config/apollo-client';
import gql from 'graphql-tag';
import { IPokemon } from '../../types/pokemon-types';

const Homepage = () => {
    const [offset, setOffset] = useState(0);
    const [pokemon, setPokemon] = useState<IPokemon[]>([]);

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 850, itemsToShow: 3 },
        { width: 1150, itemsToShow: 4 },
        { width: 1450, itemsToShow: 7 }
    ];

    useEffect(() => {
        fetchPokemon();
    }, []);

    async function fetchPokemon() {
        const query = gql`
            query pokemon($offset: Int) {
                pokemon(limit: 20, offset: $offset) {
                    name
                    id
                    sprites {
                        front_default
                    }
                    types {
                        type {
                            name
                        }
                    }
                }
            }
        `;
        const { data } = await client.query({ query, variables: { offset } });
        const newPokemons = [...pokemon, ...data.pokemon];

        setPokemon(newPokemons);
    }
    useEffect(() => {
        setOffset(pokemon.length);
    }, [pokemon]);

    return (
        <>
            <HeaderComponent />
            <Container>
                <CarouselWrapper>
                    <Carousel
                        onNextStart={(currentItem, pageIndex) => {
                            if (currentItem.index === pokemon.length - 10) {
                                fetchPokemon();
                            }
                        }}
                        breakPoints={breakPoints}
                        pagination={false}
                        isRTL={false}
                    >
                        {pokemon &&
                            pokemon.map((pokemon) => (
                                <CardComponent key={pokemon.id} {...pokemon} />
                            ))}
                    </Carousel>
                </CarouselWrapper>
            </Container>
        </>
    );
};

export default Homepage;
