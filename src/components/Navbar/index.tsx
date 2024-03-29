import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navigationItems } from './helper';

import { Container, Content, LinkNavigation, LinkNavigationTarget, NavbarContainer } from './styles';

const Navbar: React.FC = () => {
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
                            <LinkNavigationTarget href={item.link} key={item.name}>
                                {item.name}
                            </LinkNavigationTarget>
                        ) : (
                            <LinkNavigation
                                to={item.link}
                                active={checkActive(item.link) ? 1 : undefined}
                                key={item.name}
                            >
                                {item.name}
                            </LinkNavigation>
                        ),
                    )}
                </Content>
                <div />
            </Container>
        </NavbarContainer>
    );
};

export default Navbar;
