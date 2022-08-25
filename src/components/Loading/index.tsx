import React from 'react';
import { HashLoader } from 'react-spinners';

import { Container } from './styles';

const Loading: React.FC = () => (
    <Container>
        <HashLoader color="white" />
    </Container>
);

export default Loading;
