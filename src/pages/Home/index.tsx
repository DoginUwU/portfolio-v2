import React from 'react';
import AboutMe from '../../layouts/Home/AboutMe';
import Contact from '../../layouts/Home/Contact';
import Development from '../../layouts/Home/Development';
import Hero from '../../layouts/Home/Hero';
import Newspaper from '../../layouts/Home/Newspaper';
import Projects from '../../layouts/Home/Projects';
import ReactPower from '../../layouts/Home/ReactPower';

import { Container } from './styles';

const Home: React.FC = () => (
    <Container>
        <Hero />
        <AboutMe />
        <Development />
        <Projects />
        <ReactPower />
        <Newspaper />
        <Contact />
    </Container>
);

export default Home;
