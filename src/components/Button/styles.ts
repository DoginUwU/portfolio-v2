import styled, { css } from 'styled-components';

interface ContainerProps {
    blur?: boolean;
}

const Container = styled.button<ContainerProps>`
    background: ${({ theme }) => theme.colors.semantic.blue};
    border-radius: 8px;
    border: none;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.1rem;
    padding: 16px 32px;
    transition: opacity 0.2s ease-in-out;

    ${({ blur }) =>
        blur &&
        css`
            filter: drop-shadow(0px 0px 7px ${({ theme }) => theme.colors.semantic.blue});
        `}

    &:hover {
        opacity: 0.9;
    }
`;

export { Container };
