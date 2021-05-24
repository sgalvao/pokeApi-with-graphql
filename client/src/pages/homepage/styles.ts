import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    overflow: hidden;
    overflow-x: hidden;
`;
export const Logo = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 10px;

    img {
        width: 450px;
        height: 129px;
        transition: all 0.2s ease-in;
    }
    @media (max-width: 768px) {
        img {
            margin-top: 20px;
            width: 277px;
            height: 100px;
        }
    } ;
`;

export const CarouselWrapper = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    margin: 0 5%;

    .rec-arrow-right {
        &:focus {
            background: #4051fc;
        }
        &:hover {
            background: #4051fc;
        }
    }
    .rec-arrow-left {
        &:focus {
            background: #f53939;
        }
        &:hover {
            background: #f53939;
        }
    }
`;
