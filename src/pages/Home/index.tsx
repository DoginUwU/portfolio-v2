import { AnimatePresence } from 'framer-motion';
import React from 'react';
import AboutMe from '../../layouts/Home/AboutMe';
import Development from '../../layouts/Home/Development';
import Hero from '../../layouts/Home/Hero';
import Projects from '../../layouts/Home/Projects';

import { Container } from './styles';

const Home: React.FC = () => (
    <AnimatePresence>
        <Container>
            <Hero />
            <AboutMe />
            <Development />
            <Projects />
            <h1>Oi</h1>
        </Container>
    </AnimatePresence>
);

export default Home;
