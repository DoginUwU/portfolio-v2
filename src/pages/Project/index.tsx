import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Project as IProject } from '../../@types/project';
import Loading from '../../components/Loading';
import { getProjectBySlug } from '../../network/lib/project';

import { Container, Header, Title } from './styles';

const About = React.lazy(() => import('../../layouts/Project/About'));

const Project: React.FC = () => {
    const { slug } = useParams();
    const [project, setProject] = useState<IProject | undefined>();

    const handleProject = async () => {
        setProject(await getProjectBySlug(slug as string));
    };

    useEffect(() => {
        handleProject();
    }, []);

    if (!project) return <Loading />;

    return (
        <Container>
            <Header backgroundImage={project.cover}>
                <Title>
                    <h1>{project.title}</h1>
                    <p>{project.subtitle}</p>
                </Title>
            </Header>
            <About project={project} />
        </Container>
    );
};

export default Project;
