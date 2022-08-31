/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { Project as IProject } from '../../../@types/project';
import Button from '../../../components/Button';
import Carousel from '../../../components/Carousel';
import { useProjects } from '../../../context/ProjectsContext';

import { Container, Header, Project } from './styles';

const Projects: React.FC = () => {
    const { projects } = useProjects();
    const [carouselItems, setCarouselItems] = React.useState<IProject[]>(projects);
    const theme = useTheme();

    return (
        <Container>
            <Header>
                <h1>Projetos</h1>
                <div>
                    <p>Todos meus projetos estão aqui e no github, que tal dar uma olhada?</p>
                    <Link to="/projects">
                        <Button color={theme.colors.white} textColor={theme.colors.semantic.blue}>
                            Ver todos
                        </Button>
                    </Link>
                </div>
            </Header>
            <Carousel itemsCount={carouselItems.length}>
                {(activeIndex) =>
                    carouselItems.map((project, index) => {
                        const active = index === activeIndex;
                        const link = active && project.slug ? `/projects/${project.slug}` : '#';

                        // infite loop
                        if (active && activeIndex === carouselItems.length - 3) {
                            setCarouselItems([...carouselItems, ...carouselItems]);
                        }

                        return (
                            <Link key={`${project.id} - ${index}`} to={link}>
                                <Project active={active} isFirst={index === 0}>
                                    <img src={project.cover} alt={project.title} />
                                    <div>
                                        <h1>{project.title}</h1>
                                        <p>{project.subtitle}</p>
                                    </div>
                                </Project>
                            </Link>
                        );
                    })
                }
            </Carousel>
        </Container>
    );
};

export default Projects;
