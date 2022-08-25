import styled from 'styled-components';
import BaseContainer from '../BaseContainer';

const Container = styled(BaseContainer)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 50px;
    margin-top: 150px;
    padding-bottom: 50px;

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
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    border: 1px ${({ theme }) => theme.colors.gray[900]} solid;
    border-radius: 16px;
    padding: 12px;
    gap: 16px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        justify-content: center;
    }

    & > div:last-child {
        border-bottom: none;
    }
`;

const Project = styled('div')`
    width: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px ${({ theme }) => theme.colors.gray[900]} solid;

    & button {
        padding: 10px 14px;
    }

    & h2 {
        font-size: 1rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        & h2 {
            max-width: 115px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        & p {
            display: none;
        }
    }

    & .language {
        background: linear-gradient(91.26deg, #ffd66f 2.36%, #ba6e62 28.14%, #7c7aff 49.75%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
`;

export { Container, Content, Project };
