import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    display: flex;

    & div {
        font-weight: 100;
        font-size: 28px;
        color: ${({ theme }) => theme.colors.white};
    }

    & span {
        color: ${({ theme }) => theme.colors.gray[900]};
    }
`;

export { Container };
