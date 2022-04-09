import React from 'react';
import { Icon, IconifyIcon } from '@iconify/react';

import { Container } from './styles';

interface CardProps {
    title: string;
    icon: string | IconifyIcon;
    color?: string;
}

const Card: React.FC<CardProps> = ({ title, icon, color }) => (
    <Container color={color} whileHover={{ translateY: -5 }}>
        <div>
            <Icon icon={icon} />
        </div>
        {title}
    </Container>
);

export default Card;
