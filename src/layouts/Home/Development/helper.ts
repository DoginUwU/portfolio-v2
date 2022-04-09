interface Item {
    title: string;
    icon: string;
    color?: string;
}

interface ITopic {
    title: string;
    subtitle?: string;
    items: Item[];
}

const TOPICS: ITopic[] = [
    {
        title: 'Ferramentas',
        subtitle: 'Só os melhores',
        items: [
            {
                title: 'VS Code',
                icon: 'akar-icons:vscode-fill',
            },
            {
                title: 'Insomnia',
                icon: 'simple-icons:insomnia',
                color: '#5B08B1',
            },
            {
                title: 'Hyper',
                icon: 'simple-icons:hyper',
                color: '#1d1d1d',
            },
            {
                title: 'Postman',
                icon: 'simple-icons:postman',
                color: '#ff6c37',
            },
            {
                title: 'GitHub',
                icon: 'akar-icons:github-fill',
            },
            {
                title: 'Vercel',
                icon: 'akar-icons:vercel-fill',
                color: '#1d1d1d',
            },
            {
                title: 'Figma',
                icon: 'bxl:figma',
                color: '#5551FF',
            },
            {
                title: 'Docker',
                icon: 'bxl:docker',
                color: '#003f8c',
            },
            {
                title: 'Heroku',
                icon: 'simple-icons:heroku',
                color: '#79589F',
            },
            {
                title: 'Firebase',
                icon: 'simple-icons:firebase',
                color: '#F57C00',
            },
        ],
    },
    {
        title: 'Desenvolvimento',
        items: [
            {
                title: 'React',
                icon: 'akar-icons:react-fill',
            },
            {
                title: 'React Native',
                icon: 'akar-icons:react-fill',
            },
            {
                title: 'Node',
                icon: 'akar-icons:node-fill',
                color: '#417e38',
            },
            {
                title: 'Prisma',
                icon: 'file-icons:prisma',
                color: '#38a169',
            },
            {
                title: 'GraphQL',
                icon: 'file-icons:graphql',
            },
            {
                title: 'TypeScript',
                icon: 'file-icons:typescript',
            },
            {
                title: 'Tailwind',
                icon: 'bxl:tailwind-css',
                color: '#39BDF7',
            },
            {
                title: 'Redux',
                icon: 'akar-icons:redux-fill',
                color: '#6a43a9',
            },
            {
                title: 'Eslint',
                icon: 'cib:eslint',
                color: '#4B32C3',
            },
            {
                title: 'Webpack',
                icon: 'cib:webpack',
                color: '#175d96',
            },
        ],
    },
];

export { TOPICS };
