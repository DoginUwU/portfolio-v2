import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { Project as IProject } from '../../@types/project';
import { getProjectBySlug } from '../../network/lib/project';

import { Container, Header, Loading, Title } from './styles';

const Project: React.FC = () => {
    const { slug } = useParams();
    const [project, setProject] = useState<IProject | undefined>();

    const handleProject = async () => {
        setProject(await getProjectBySlug(slug as string));
    };

    useEffect(() => {
        handleProject();
    }, []);

    if (!project)
        return (
            <Loading>
                <ReactLoading type="spin" />
            </Loading>
        );

    return (
        <Container>
            <Header backgroundImage={project.cover}>
                <Title>
                    <h1>{project.title}</h1>
                    <p>{project.subtitle}</p>
                </Title>
            </Header>
        </Container>
    );
};

export default Project;
