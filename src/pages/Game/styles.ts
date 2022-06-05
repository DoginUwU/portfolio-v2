import styled from 'styled-components';

const Game = styled.div`
    width: 100vw;
    height: 100vh;
    overflow: hidden;
`;

const Container = styled.iframe`
    width: 100vw;
    height: 100vh;
    overflow: hidden;

    & > * {
        overflow: hidden;
    }
`;

const Loading = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

export { Game, Container, Loading };
