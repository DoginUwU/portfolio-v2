import styled from 'styled-components';

const Container = styled.div`
    position: relative;
    width: 100%;
    justify-content: center;
    align-items: center;
    display: flex;
    padding-bottom: 100px;
    padding-top: 50px;

    & img {
        width: 150px;
    }

    & .ambient {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 0 100px;
        opacity: 0.4;

        @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
            display: none;
        }
    }
`;

export { Container };
