import React from 'react';
import { Container } from './styles';

const NotFound: React.FC = () => (
    <Container>
        <h1>Oops! Onde você quer chegar?</h1>
        <p>Não consegui encontrar essa página... tem certeza de que este é o caminho certo?</p>
        <img src="/assets/logo.svg" alt="My logo" />
    </Container>
);

export default NotFound;
