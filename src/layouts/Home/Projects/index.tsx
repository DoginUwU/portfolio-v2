import React from 'react';
import toast from 'react-hot-toast';
import { useTheme } from 'styled-components';
import Button from '../../../components/Button';
import Carousel from '../../../components/Carousel';
import { useProjects } from '../../../context/ProjectsContext';

import { Container, Header, Project } from './styles';

const Projects: React.FC = () => {
    const { projects } = useProjects();
    const theme = useTheme();

    const handleViewAllProjects = (): void => {
        toast.error('Indisponível no momento.');
    };

    return (
        <Container>
            <Header>
                <h1>Projetos</h1>
                <div>
                    <p>Todos meus projetos estão aqui e no github, que tal dar uma olhada?</p>
                    <Button
                        color={theme.colors.white}
                        textColor={theme.colors.semantic.blue}
                        onClick={handleViewAllProjects}
                    >
                        Ver todos
                    </Button>
                </div>
            </Header>
            <Carousel itemsCount={projects.length}>
                {(activeIndex) =>
                    projects.map((project, index) => (
                        <Project key={project.slug} active={index === activeIndex} isFirst={index === 0}>
                            <img src={project.cover} alt={project.title} />
                            <div>
                                <h1>{project.title}</h1>
                                <p>{project.subtitle}</p>
                            </div>
                        </Project>
                    ))
                }
            </Carousel>
        </Container>
    );
};

export default Projects;
