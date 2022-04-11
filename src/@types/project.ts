type Technologies = 'React.JS' | 'React Native' | 'Next.JS' | 'Node.JS' | 'Typescript' | 'Flutter';

interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    slug: string;
    cover: string;
    technologies: Technologies;
    repositoryUrl?: string;
    projectUrl?: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
}

interface ProjectGetParams {
    id: string;
    attributes: {
        name: string;
        subtitle: string;
        description: string;
        slug: string;
        cover: string;
        technologies: Technologies;
        repositoryUrl: string;
        projectUrl: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
    };
}

interface ProjectsGetParams {
    data: ProjectGetParams[];
}

export type { Project, ProjectGetParams, ProjectsGetParams, Technologies };
