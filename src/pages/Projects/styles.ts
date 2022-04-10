import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BaseContainer from '../../components/BaseContainer';

const Container = styled(BaseContainer)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 50px;
    margin-top: 150px;
    padding-bottom: 150px;

    h1 {
        color: ${({ theme }) => theme.colors.white};
        font-size: 3.5rem;
        line-height: 62px;

        span {
            background: linear-gradient(91.26deg, #ffd66f 2.36%, #ba6e62 28.14%, #7c7aff 49.75%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        justify-content: center;
    }
`;

const Project = styled(Link)`
    flex-basis: calc(50% - 2rem);
    max-height: 300px;
    overflow: hidden;
    border-radius: 22px;
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.15s ease-in-out;
    }

    div {
        position: absolute;
        inset: 0;
        background: ${({ theme }) => `linear-gradient(180deg, transparent 48.44%, ${theme.colors.background} 100%)`};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-end;
        padding: 16px;
    }

    &:hover {
        cursor: pointer;

        img {
            transform: scale(1.1);
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-basis: 100%;
    }
`;

export { Container, Content, Project };
