import styled from 'styled-components';
import { motion } from 'framer-motion';

interface ContainerProps {
    color?: string;
}

const Container = styled(motion.div)<ContainerProps>`
    background: ${({ theme }) => theme.colors.black};
    border-radius: 18px;
    padding: 12px 18px;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 12px;
    transition: background 0.2s ease-in-out;

    & div {
        background: ${({ theme, color }) => color ?? theme.colors.semantic.blue};
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 4px;
        flex: 0;

        & svg {
            width: 24px;
            height: 24px;
        }
    }

    &:hover {
        background: ${({ theme, color }) => color ?? theme.colors.semantic.blue};
        cursor: default;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        justify-content: space-between;
    }
`;

export { Container };
