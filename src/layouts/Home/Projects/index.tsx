import React from 'react';
import { useTheme } from 'styled-components';
import Button from '../../../components/Button';
import Carousel from '../../../components/Carousel';

import { Container, Header, Project } from './styles';

const Projects: React.FC = () => {
    const theme = useTheme();

    return (
        <Container>
            <Header>
                <h1>Projetos</h1>
                <div>
                    <p>Todos meus projetos importantes</p>
                    <Button color={theme.colors.white} textColor={theme.colors.semantic.blue}>
                        Ver todos
                    </Button>
                </div>
            </Header>
            <Carousel itemsCount={20}>
                {(activeIndex) =>
                    Array.from({ length: 20 }).map((_, index) => (
                        <Project key={index} active={index === activeIndex}>
                            <img src="/assets/Rectify 11 Black.jpg" alt="" />
                            <div>
                                <h1>Rectify</h1>
                                <p>Uma simples aplicação do windows :p</p>
                            </div>
                        </Project>
                    ))
                }
            </Carousel>
        </Container>
    );
};

export default Projects;
