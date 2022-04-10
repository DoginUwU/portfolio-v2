import { Icon } from '@iconify/react';
import React from 'react';

import { CheckedLabel, Container, Content, Header } from './styles';

const ReactPower: React.FC = () => (
    <Container>
        <Header>
            <h1>O poder do React. Agora em suas mãos</h1>
            <p>
                Eu crio sites e aplicativos para empresas ou pessoas físicas que sejam escaláveis, tenham ótimo visual e
                atinjam o objetivo do cliente com certeza.
            </p>
        </Header>
        <Content>
            <CheckedLabel>
                <Icon icon="bi:check-circle" />
                Uso das melhores tecnologias do mercado
            </CheckedLabel>
            <CheckedLabel>
                <Icon icon="bi:check-circle" />
                Uso das melhores biblioteas de estilo
            </CheckedLabel>
            <CheckedLabel>
                <Icon icon="bi:check-circle" />
                Criação do seu site com um estilo moderno e responsivo
            </CheckedLabel>
            <CheckedLabel>
                <Icon icon="bi:check-circle" />
                Entendimento de comunicação com back-end tanto RestFull quanto GraphQL
            </CheckedLabel>
        </Content>
    </Container>
);

export default ReactPower;
