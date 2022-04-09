import React from 'react';
import Button from '../../../components/Button';
import Card from '../../../components/Card';

import { Cards, Container, Content, Left, Right } from './styles';

const Hero: React.FC = () => (
    <Container>
        <Content>
            <Left>
                <h1>
                    <span>Luiz Eduardo</span> Desenvolvedor Full-stack
                </h1>
                <p>Um apaixonado desenvolvedor web front-end brasileiro.</p>
                <Button type="button">Meus projetos</Button>
            </Left>
            <Right>
                <img src="assets/rectangle_1.svg" alt="Me" />
            </Right>
        </Content>
        <Cards>
            <Card title="Front-end" icon="mdi:web" />
            <Card title="Back-end" icon="entypo:database" />
        </Cards>
    </Container>
);

export default Hero;
