import axios from 'axios';
import { GithubProject } from '../../@types/github';

const getAllProjectsFromGithub = async (): Promise<GithubProject[]> => {
    const response = await axios.get<GithubProject[]>(
        'https://api.github.com/users/doginuwu/repos?sort=stargazers&per_page=100&type=source',
    );

    return response.data;
};

export { getAllProjectsFromGithub };
