import Color from 'color';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BaseContainer from '../BaseContainer';

interface LinkNavigationProps {
    active?: boolean;
}

const NavbarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    backdrop-filter: saturate(180%) blur(5px);
    background: ${({ theme }) => Color(theme.colors.background).alpha(0.3).string()};
`;

const Container = styled(BaseContainer)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    a {
        display: flex;
        align-items: center;
    }

    img {
        width: 42px;
        height: 42px;
    }

    button {
        padding: 8px;
        font-size: 16px;
    }
`;

const Content = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
`;

const LinkNavigation = styled(Link)<LinkNavigationProps>`
    text-decoration: none;
    color: ${({ active, theme }) => (active ? theme.colors.white : theme.colors.gray[600])};

    &:hover {
        color: ${({ theme }) => theme.colors.white};
    }
`;

export { Container, Content, NavbarContainer, LinkNavigation };
