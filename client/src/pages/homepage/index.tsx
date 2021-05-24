import { useEffect, useState } from 'react';
import { Container, CarouselWrapper, Logo } from './styles';
import CardComponent from '../../components/headerComponent/index';
import HeaderComponent from '../../components/headerComponent/index';
import Carousel from 'react-elastic-carousel';
import client from '../../config/apollo-client';
import gql from 'graphql-tag';
import { IPokemon } from '../../types/pokemon-types';
import ModalError from '../../components/modalComponent/index';

import LoaderComponent from 'components/loadingComponent/index';

const Homepage = () => {
    const [offset, setOffset] = useState(0);
    const [pokemon, setPokemon] = useState<IPokemon[]>([]);
    const [error, setError] = useState(false);
    const [load, setLoad] = useState(true);

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
        try {
            const { data, loading } = await client.query({
                query,
                variables: { offset }
            });
            const newPokemons = [...pokemon, ...data.pokemon];
            setLoad(loading);
            setPokemon(newPokemons);
        } catch (err) {
            setError(true);
        }
    }

    useEffect(() => {
        setOffset(pokemon.length);
    }, [pokemon]);

    return (
        <>
            <HeaderComponent />
            <Logo>
                <img src="img/PokeWiki.png" alt="Pokemon Wiki Logo" />
            </Logo>
            <Container>
                {error && <ModalError />}
                <CarouselWrapper>
                    <Carousel
                        className="carousel"
                        onChange={(currentItem) => {
                            if (currentItem.index >= pokemon.length - 12) {
                                fetchPokemon();
                            }
                        }}
                        breakPoints={breakPoints}
                        pagination={false}
                        isRTL={false}
                    >
                        {load && <LoaderComponent />}
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
