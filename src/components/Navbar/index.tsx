import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from 'styled-components';
import Button from '../Button';
import { navigationItems } from './helper';

import { Container, Content, LinkNavigation, LinkNavigationTarget, NavbarContainer } from './styles';

const Navbar: React.FC = () => {
    const theme = useTheme();
    const location = useLocation();

    const checkActive = (path: string) => location.pathname === path;

    return (
        <NavbarContainer>
            <Container>
                <Link to="/">
                    <img src="/favicon.svg" alt="Website logo" width="42px" height="42px" />
                </Link>
                <Content>
                    {navigationItems.map((item) =>
                        item.absolutLink ? (
                            <LinkNavigationTarget href={item.link} key={item.name} target="_blank">
                                {item.name}
                            </LinkNavigationTarget>
                        ) : (
                            <LinkNavigation to={item.link} active={checkActive(item.link)} key={item.name}>
                                {item.name}
                            </LinkNavigation>
                        ),
                    )}
                </Content>
                <a href="https://github.com/DoginUwU" target="_blank" rel="noreferrer">
                    <Button color={theme.colors.white} textColor={theme.colors.black}>
                        Github
                    </Button>
                </a>
            </Container>
        </NavbarContainer>
    );
};

export default Navbar;
