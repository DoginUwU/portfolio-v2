import qs from 'qs';
import { Project, ProjectsGetParams, ProjectGetParams } from '../../@types/project';
import { api } from '../../services/axios';

const convertStrapiProjectToProject = (project: ProjectGetParams): Project => {
    const { name, cover, description, subtitle, slug, createdAt, publishedAt, updatedAt } = project.attributes;

    return {
        id: project.id,
        title: name,
        subtitle,
        description,
        slug,
        cover,
        createdAt: new Date(createdAt),
        updatedAt: new Date(updatedAt),
        publishedAt: new Date(publishedAt),
    };
};

const getAllProjects = async (): Promise<Project[]> => {
    const query = qs.stringify({
        populate: '*',
    });
    const response = await api.get<ProjectsGetParams>(`projects?${query}`);

    const responseProjects: Project[] = response.data.data.map((project) => convertStrapiProjectToProject(project));

    return responseProjects;
};

const getProjectBySlug = async (slug: string): Promise<Project | undefined> => {
    const query = qs.stringify({
        populate: '*',
        filters: {
            slug: {
                $eq: slug,
            },
        },
    });
    const response = await api.get<ProjectsGetParams>(`projects?${query}`);

    const responseProjects: Project[] = response.data.data.map((project) => convertStrapiProjectToProject(project));

    return responseProjects.length ? responseProjects[0] : undefined;
};

export { getAllProjects, getProjectBySlug };
