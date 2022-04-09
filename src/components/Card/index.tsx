import React from 'react';
import { Icon } from '@iconify/react';

import { Container } from './styles';

interface CardProps {
    title: string;
    icon: string;
}

const Card: React.FC<CardProps> = ({ title, icon }) => (
    <Container>
        <div>
            <Icon icon={icon} />
        </div>
        {title}
    </Container>
);

export default Card;
