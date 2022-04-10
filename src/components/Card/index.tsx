import React from 'react';
import { Icon, IconifyIcon } from '@iconify/react';

import { HTMLMotionProps } from 'framer-motion';
import { Container } from './styles';

interface CardProps extends HTMLMotionProps<'div'> {
    title: string;
    icon: string | IconifyIcon;
    color?: string;
}

const Card: React.FC<CardProps> = ({ title, icon, color, ...rest }) => (
    <Container color={color} whileHover={{ translateY: -5 }} {...rest}>
        <div>
            <Icon icon={icon} />
        </div>
        {title}
    </Container>
);

export default Card;
