import { HTMLMotionProps } from 'framer-motion';
import React from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';

interface ButtonProps extends HTMLMotionProps<'button'> {
    blur?: boolean;
    color?: string;
    textColor?: string;
    loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
    <Container whileTap={{ scale: loading ? 1 : 0.95 }} disabled={loading || undefined} {...rest}>
        {loading ? <ReactLoading type="spin" height={16} width={16} /> : children}
    </Container>
);

export default Button;
