import React, { createContext, useEffect, useMemo, useState } from 'react';
import { Project, ProjectsGetParams } from '../@types/project';
import { api } from '../services/axios';

interface IProjectsContext {
    projects: Project[];
}

const ProjectsContext = createContext<IProjectsContext>({} as IProjectsContext);

const ProjectsProvider: React.FC = ({ children }) => {
    const [projects, setProjects] = useState<Project[]>([]);

    const getProjects = async () => {
        const response = await api.get<ProjectsGetParams>('projects?populate=*');

        const responseProjects: Project[] = response.data.data.map((project) => {
            const { name, cover, createdAt, description, publishedAt, slug, subtitle, updatedAt } = project.attributes;

            return {
                id: project.id,
                title: name,
                subtitle,
                description,
                slug,
                cover: cover.data.attributes.formats.large.url,
                createdAt: new Date(createdAt),
                updatedAt: new Date(updatedAt),
                publishedAt: new Date(publishedAt),
            };
        });

        setProjects(responseProjects);
    };

    useEffect(() => {
        getProjects();
    }, []);

    const value = useMemo(() => ({ projects }), [projects]);

    return <ProjectsContext.Provider value={value}>{children}</ProjectsContext.Provider>;
};

const useProjects = () => {
    const context = React.useContext(ProjectsContext);

    if (context === undefined) {
        throw new Error('useProjects must be used within a ProjectsProvider');
    }

    return context;
};

export { ProjectsProvider, useProjects };
