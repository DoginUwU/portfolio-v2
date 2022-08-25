import React, { useEffect, useState } from 'react';
import { GithubProject } from '../../@types/github';
import { getAllProjectsFromGithub } from '../../network/lib/github';
import Button from '../Button';

import { Container, Content, Project } from './styles';

const GithubProjects: React.FC = () => {
    const [repos, setRepos] = useState<GithubProject[]>([]);

    const getProjects = async () => {
        const projects = await getAllProjectsFromGithub();

        setRepos(projects);
    };

    useEffect(() => {
        getProjects();
    }, []);

    if (!repos.length) return null;

    return (
        <Container>
            <h1>
                Projetos públicos no <span>GitHub</span>
            </h1>
            <Content>
                {repos.map((repo) => (
                    <Project key={repo.id}>
                        <div>
                            <h2>{repo.name}</h2>
                            <p>{repo.description}</p>
                            <div className="language">{repo.language}</div>
                        </div>
                        <a href={repo.html_url} target="_blank" rel="noreferrer">
                            <Button>Abrir repo</Button>
                        </a>
                    </Project>
                ))}
            </Content>
        </Container>
    );
};

export default GithubProjects;
