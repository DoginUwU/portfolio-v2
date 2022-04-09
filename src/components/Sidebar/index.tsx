import React from 'react';

import { Container } from './styles';

const Sidebar: React.FC = () => (
    <Container>
        <nav>
            <div>
                <img src="/assets/home.svg" alt="Home" />
            </div>
        </nav>
    </Container>
);

export default Sidebar;
