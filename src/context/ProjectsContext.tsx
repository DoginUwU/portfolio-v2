import React, { createContext, useEffect, useMemo, useState } from 'react';
import { Project } from '../@types/project';
import { getAllProjects } from '../network/lib/project';

interface IProjectsContext {
    projects: Project[];
    isLoading: boolean;
}

interface IProjectsContextProvider {
    children: React.ReactNode;
}

const initialLoadingProjects: Project[] = Array.from(Array(3)).map(
    (_, index) =>
        ({
            id: index,
            cover: 'assets/loading_carousel.webp',
            title: 'Carregando...',
            subtitle: 'Estamos iniciando nossos servidores... Aguarde',
        } as unknown as Project),
);

const ProjectsContext = createContext<IProjectsContext>({} as IProjectsContext);

const ProjectsProvider: React.FC<IProjectsContextProvider> = ({ children }) => {
    const [projects, setProjects] = useState<Project[]>(initialLoadingProjects);
    const [isLoading, setIsLoading] = useState(true);

    const getProjects = async () => {
        // setProjects(await getAllProjects());
        setIsLoading(false);
    };

    useEffect(() => {
        getProjects();
    }, []);

    const value = useMemo(() => ({ projects, isLoading }), [projects, isLoading]);

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
