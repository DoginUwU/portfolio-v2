import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Project as IProject } from '../../@types/project';
import { getProjectBySlug } from '../../network/lib/project';

import { Container, Header } from './styles';

const Project: React.FC = () => {
    const { slug } = useParams();
    const [project, setProject] = useState<IProject | undefined>();

    const handleProject = async () => {
        setProject(await getProjectBySlug(slug as string));
    };

    useEffect(() => {
        handleProject();
    }, []);

    if (!project) return <div>Carregando...</div>;

    return (
        <Container>
            <Header backgroundImage={project.cover} />
        </Container>
    );
};

export default Project;
