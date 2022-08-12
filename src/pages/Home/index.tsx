import React from 'react';

import { Container } from './styles';

const Hero = React.lazy(() => import('../../layouts/Home/Hero'));
const AboutMe = React.lazy(() => import('../../layouts/Home/AboutMe'));
const Contact = React.lazy(() => import('../../layouts/Home/Contact'));
const Development = React.lazy(() => import('../../layouts/Home/Development'));
const Newspaper = React.lazy(() => import('../../layouts/Home/Newspaper'));
const Projects = React.lazy(() => import('../../layouts/Home/Projects'));
const ReactPower = React.lazy(() => import('../../layouts/Home/ReactPower'));

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
