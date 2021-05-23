import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 200px;
    background: #fff;
    height: 300px;
    border-radius: 16px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    min-width: 200px;
`;
export const PokeName = styled.h1`
    font-family: 'Press Start 2P';
    font-size: 16px;
    color: #575657;
    margin-bottom: 90px;
`;
export const PokeImg = styled.div`
    width: 120px;
    height: 120px;
    box-sizing: content-box;
    background: #f8f8f8;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
        rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    margin-top: -60px;
    img {
        width: 100px;
        height: 100px;
    }
`;

export const PokeAbbility = styled.h1`
    font-family: 'Press Start 2P';
    font-size: 14px;
    color: #575957;
`;
