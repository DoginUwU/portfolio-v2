import React from 'react';
import ReactLoading from 'react-loading';
import { useProjects } from '../../context/ProjectsContext';

import { Container, Content, Loading, Project } from './styles';

const Projects: React.FC = () => {
    const { projects } = useProjects();

    if (!projects.length)
        return (
            <Loading>
                <ReactLoading type="spin" />
            </Loading>
        );

    return (
        <Container>
            <h1>
                Meus <span>projetos</span>
            </h1>
            <Content>
                {projects.map((project) => (
                    <Project key={project.id} to={`/projects/${project.slug}`}>
                        <img src={project.cover} alt={project.title} />
                        <div>
                            <h2>{project.title}</h2>
                            <p>{project.subtitle}</p>
                        </div>
                    </Project>
                ))}
            </Content>
        </Container>
    );
};

export default Projects;
