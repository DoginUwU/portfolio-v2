import React from 'react';
import { Project } from '../../../@types/project';
import Card from '../../../components/Card';
import { technologiesHelper } from './helper';

import { Cards, Container, Description } from './styles';

interface AboutProps {
    project: Project;
}

const About: React.FC<AboutProps> = ({ project }) => (
    <Container>
        <h1>Sobre o projeto</h1>
        <Cards>
            <Card {...technologiesHelper[project.technologies]} />
            {project.repositoryUrl && (
                <a href={project.repositoryUrl} target="_blank" rel="noreferrer">
                    <Card icon="akar-icons:github-fill" title="Ver código fonte" pressable />
                </a>
            )}
            {project.projectUrl && (
                <a href={project.projectUrl} target="_blank" rel="noreferrer">
                    <Card icon="mdi:semantic-web" title="Ver projeto final" pressable />
                </a>
            )}
        </Cards>
        <Description>{project.description}</Description>
    </Container>
);

export default About;
