// eslint-disable-next-line import/no-extraneous-dependencies
const scanner = require('sonarqube-scanner');

scanner(
    {
        serverUrl: 'http://localhost:9000',
        login: 'admin',
        password: 'admin',
        token: 'd85d92b8378d379cef9ff22bcb946f1634f0d12a',
        options: {
            'sonar.projectName': 'portfolio-v2',
            'sonar.projectKey': 'portfolio-v2',
            'sonar.projectVersion': '0.0.1',
            'sonar.sources': './src',
            'sonar.sourceEncoding': 'UTF-8',
        },
    },
    () => process.exit(),
);
