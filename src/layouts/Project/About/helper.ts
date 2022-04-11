import { Technologies } from '../../../@types/project';

type ITechnologiesHelper = {
    [key in Technologies]: {
        title: string;
        icon: string;
        color?: string;
    };
};

const technologiesHelper: ITechnologiesHelper = {
    'React.JS': {
        title: 'React.JS',
        icon: 'akar-icons:react-fill',
        color: '#61DAFB',
    },
    'React Native': {
        title: 'React Native',
        icon: 'akar-icons:react-fill',
        color: '#61DAFB',
    },
    'Next.JS': {
        title: 'Next.JS',
        icon: 'cib:next-js',
        color: '#1d1d1d',
    },
    'Node.JS': {
        title: 'Node.JS',
        icon: 'akar-icons:node-fill',
        color: '#417e38',
    },
    Typescript: {
        title: 'Typescript',
        icon: 'simple-icons:typescript',
        color: '#007acc',
    },
    Flutter: {
        title: 'Flutter',
        icon: 'bxl:flutter',
        color: '#0468d7',
    },
};

export { technologiesHelper };
