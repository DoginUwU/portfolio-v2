import React from 'react';
import { Icon, IconifyIcon } from '@iconify/react';

import { HTMLMotionProps } from 'framer-motion';
import { Container } from './styles';

interface CardProps extends HTMLMotionProps<'div'> {
    title: string;
    icon: string | IconifyIcon;
    color?: string;
    pressable?: boolean;
}

const Card: React.FC<CardProps> = ({ title, icon, color, pressable, ...rest }) => (
    <Container color={color} whileHover={{ translateY: pressable ? 0 : -5 }} {...rest}>
        <div>
            <Icon icon={icon} />
        </div>
        {title}
    </Container>
);

export default Card;
