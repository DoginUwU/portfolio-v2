import styled from 'styled-components';

const Container = styled.div`
    background: ${({ theme }) => theme.colors.black};
    border-radius: 18px;
    padding: 12px 18px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    transition: background 0.2s ease-in-out;

    & div {
        background: ${({ theme }) => theme.colors.semantic.blue};
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
        background: ${({ theme }) => theme.colors.semantic.blue};
        cursor: default;
    }
`;

export { Container };
