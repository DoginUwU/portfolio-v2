import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 18px;

    & > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: 24px;

        & > .block {
            width: 40px;
            height: 8px;
            background: ${({ theme }) => theme.colors.semantic.blue};
        }

        & > h4 {
            font-size: 0.875rem;
            line-height: 16px;
            font-weight: 500;
        }
    }

    & > h1 {
        font-size: 2.5rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        align-items: center;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        & > h1 {
            font-size: 1.5rem;
        }
    }
`;

export { Container };
