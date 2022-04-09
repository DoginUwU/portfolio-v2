import { HTMLMotionProps } from 'framer-motion';
import React from 'react';

import { Container } from './styles';

interface ButtonProps extends HTMLMotionProps<'button'> {
    blur?: boolean;
    color?: string;
    textColor?: string;
}

const Button: React.FC<ButtonProps> = (rest) => <Container whileTap={{ scale: 0.95 }} {...rest} />;

export default Button;
