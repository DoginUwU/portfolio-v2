import React, { createContext, useEffect, useMemo, useState } from 'react';
import { Project } from '../@types/project';
import { getAllProjects } from '../network/lib/project';

interface IProjectsContext {
    projects: Project[];
}

interface IProjectsContextProvider {
    children: React.ReactNode;
}

const ProjectsContext = createContext<IProjectsContext>({} as IProjectsContext);

const ProjectsProvider: React.FC<IProjectsContextProvider> = ({ children }) => {
    const [projects, setProjects] = useState<Project[]>([]);

    const getProjects = async () => {
        setProjects(await getAllProjects());
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
