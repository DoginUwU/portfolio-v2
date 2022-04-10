interface Project {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    publishedAt: Date;
    cover: string;
}

interface ProjectGetParams {
    id: string;
    attributes: {
        name: string;
        subtitle: string;
        description: string;
        slug: string;
        createdAt: string;
        updatedAt: string;
        publishedAt: string;
        cover: {
            data: {
                attributes: {
                    formats: {
                        large: {
                            url: string;
                        };
                    };
                };
            };
        };
    };
}

interface ProjectsGetParams {
    data: ProjectGetParams[];
}

export type { Project, ProjectsGetParams };