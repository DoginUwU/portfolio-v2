import React from 'react';

import { Container } from './styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    blur?: boolean;
}

const Button: React.FC<ButtonProps> = (rest) => <Container {...rest} />;

export default Button;
