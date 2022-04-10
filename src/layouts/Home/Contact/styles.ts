import Color from 'color';
import styled, { css } from 'styled-components';
import BaseContainer from '../../../components/BaseContainer';

interface CardProps {
    active?: boolean;
}

const Container = styled(BaseContainer)`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    position: relative;
    gap: 32px;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        flex-direction: column;
    }
`;

const Content = styled.div`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 22px;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        max-width: 100%;
        width: 100%;
        align-items: center;
        text-align: center;
    }
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;

    p {
        color: ${({ theme }) => theme.colors.gray[600]};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        align-items: center;
    }
`;

const Cards = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;
`;

const Card = styled.div<CardProps>`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;
    padding: 12px;
    padding-right: 60px;
    color: ${({ theme }) => theme.colors.gray[600]};
    border-radius: 8px;

    ${({ active, theme }) =>
        active &&
        css`
            background-color: ${Color(theme.colors.semantic.blue).alpha(0.3).string()};
            border: 1px solid ${theme.colors.semantic.blue};
        `}

    svg {
        width: 24px;
        height: 24px;
        color: ${({ theme }) => theme.colors.semantic.lightBlue};
    }
`;

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 12px;

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.colors.white};
        text-decoration: none;
        padding: 12px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.semantic.blue};

        svg {
            width: 24px;
            height: 24px;
        }
    }
`;

const Form = styled.form`
    max-width: 500px;
    flex: 1;
    padding: 32px;
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 22px;

    textarea {
        resize: none;
    }

    button {
        align-self: flex-end;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        max-width: 100%;
        width: 100%;
    }
`;

export { Container, Content, Header, Cards, Card, Footer, Form };
