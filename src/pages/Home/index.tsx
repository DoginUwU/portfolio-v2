import React from 'react';
import AboutMe from '../../layouts/Home/AboutMe';
import Hero from '../../layouts/Home/Hero';

import { Container } from './styles';

const Home: React.FC = () => (
    <Container>
        <Hero />
        <AboutMe />
    </Container>
);

export default Home;
