import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 12px;
    display: flex;
    padding: 12px;
    text-align: center;

    & img {
        width: 100px;
        position: absolute;
        bottom: 20px;
    }
`;

export { Container };
