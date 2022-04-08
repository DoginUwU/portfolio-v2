import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    display: flex;

    & div {
        font-weight: 100;
        font-size: 28px;
        color: #fafafa;
    }

    & span {
        color: #757575;
    }
`;

export { Container };
