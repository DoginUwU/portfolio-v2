import Color from 'color';
import styled, { css } from 'styled-components';
import BaseContainer from '../../../components/BaseContainer';

interface ProjectProps {
    active?: boolean;
    isFirst?: boolean;
}

const Container = styled.div`
    width: 100%;
    background: ${({ theme }) => theme.colors.semantic.blue};
    padding: 40px 0 0 0;
    display: flex;
    flex-direction: column;
`;

const Header = styled(BaseContainer)`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 32px;
    margin-bottom: 64px;

    div {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        p {
            display: none;
        }

        button {
            width: 100%;
        }
    }
`;

const Project = styled.div<ProjectProps>`
    display: inline-flex;
    width: 33.33%;
    opacity: 0.3;
    transition: all 0.2s ease-in-out;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
    cursor: default;

    ${({ active, isFirst }) =>
        active &&
        css`
            opacity: 1;
            transform: ${isFirst ? 'scale(1)' : 'scale(1.2)'};
            border-radius: ${isFirst ? '0' : '12px'};
            z-index: 10;
            cursor: pointer;
        `};

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    div {
        width: 100%;
        position: absolute;
        bottom: 0;
        left: 0;
        background: ${({ theme }) => Color(theme.colors.black).alpha(0.5).string()};
        padding: 16px;
        transition: all 0.2s ease-in-out;
        opacity: ${({ active }) => (active ? 1 : 0)};

        h1 {
            font-size: 24px;
        }

        p {
            font-size: 14px;
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        width: 100%;
        transform: scale(1);
        border-radius: 0px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        div {
            display: none;
        }
    }
`;

const Loading = styled.div`
    margin: 0 auto;
    padding-bottom: 40px;
`;

export { Container, Header, Project, Loading };
