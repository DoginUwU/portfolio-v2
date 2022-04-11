import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import BaseContainer from '../../../components/BaseContainer';

const Container = styled(BaseContainer)`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
    padding-bottom: 32px;

    h1,
    h2,
    h3,
    h4 {
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.semantic.lightBlue};
    }

    h1:not(:first-child),
    h2,
    h3,
    h4 {
        margin-top: 24px;
    }

    ul {
        list-style-type: disclosure-closed;
        padding-left: 32px;
    }

    a {
        color: ${({ theme }) => theme.colors.semantic.lightBlue};
    }
`;

const Cards = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;

    & > * {
        text-decoration: none;
    }
`;

const Description = styled(ReactMarkdown)`
    margin-top: 32px;
`;

export { Container, Cards, Description };
