import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import { itemVariants, variants } from './helper';

import { Cards, Container, Content, Left, Right } from './styles';

const Hero: React.FC = () => (
    <Container>
        <Content>
            <Left variants={variants} initial="hidden" animate="show">
                <motion.h1 variants={itemVariants}>
                    <span>Luiz Eduardo</span> Desenvolvedor Full-stack
                </motion.h1>
                <motion.p variants={itemVariants}>Um apaixonado desenvolvedor web brasileiro.</motion.p>
                <Link to="/projects">
                    <Button type="button" blur variants={itemVariants}>
                        Meus projetos
                    </Button>
                </Link>
            </Left>
            <Right>
                <img src="assets/eu_494x493.webp" alt="Me" />
            </Right>
        </Content>
        <Cards variants={variants} initial="hidden" animate="show">
            <Card title="Front-end" icon="mdi:web" variants={itemVariants} />
            <Card title="Back-end" icon="entypo:database" variants={itemVariants} />
        </Cards>
    </Container>
);

export default Hero;
