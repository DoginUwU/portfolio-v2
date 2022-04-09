import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 85px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: 10px;
    }
`;

const Content = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 36px;
    max-width: 480px;

    & h1 {
        color: ${({ theme }) => theme.colors.white};
        font-size: 3.5rem;
        line-height: 62px;

        & span {
            background: linear-gradient(91.26deg, #ffd66f 2.36%, #ba6e62 28.14%, #7c7aff 49.75%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
    }

    & p {
        font-weight: 400;
        font-size: 1.25rem;
        line-height: 28px;
        color: ${({ theme }) => theme.colors.gray[800]};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        & h1 {
            font-size: 3rem;
        }

        & p {
            font-size: 1rem;
        }

        & button {
            width: 100%;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        & h1 {
            font-size: 2rem;
            line-height: 32px;
        }

        & p {
            font-size: 1rem;
        }

        & button {
            width: 100%;
        }
    }
`;

const Right = styled.div`
    max-width: 500px;

    & img {
        width: 100%;
        height: 100%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        display: none;
    }
`;

const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    align-self: flex-start;
    gap: 18px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        gap: 10px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        flex-direction: column;

        & div {
            width: 100%;
        }
    }
`;

export { Container, Content, Left, Right, Cards };
