import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => (
    <Container>
        <img src="/assets/logo.svg" alt="My logo" />
        <img src="/assets/ambient.svg" className="ambient" alt="Ambient" />
    </Container>
);

export default Footer;
