import { motion } from 'framer-motion';
import styled, { css } from 'styled-components';

interface ContainerProps {
    blur?: boolean;
    color?: string;
    textColor?: string;
    loading?: boolean;
}

const Container = styled(motion.button)<ContainerProps>`
    background: ${({ theme, color }) => color ?? theme.colors.semantic.blue};
    border-radius: 8px;
    border: none;
    color: ${({ theme, textColor }) => textColor ?? theme.colors.white};
    font-size: 1.1rem;
    padding: 16px 32px;
    transition: opacity 0.2s ease-in-out;
    opacity: ${({ loading }) => (loading ? 0.5 : 1)};
    cursor: ${({ loading }) => (loading ? 'not-allowed' : 'pointer')};

    ${({ blur, theme, color }) =>
        blur &&
        css`
            filter: drop-shadow(0px 0px 7px ${color ?? theme.colors.semantic.blue});
        `}

    &:hover {
        opacity: ${({ loading }) => (loading ? 0.5 : 0.9)};
    }
`;

export { Container };
