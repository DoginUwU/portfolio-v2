import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    height: 100vh;
    position: fixed;
    padding: 18px;
    border-right: 1px solid #7c7c7c;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 100%;
        height: fit-content;
        bottom: unset;
        border-right: none;
        border-bottom: 1px solid #7c7c7c;
        padding: 10px;
        flex-direction: row;
    }
`;

export { Container };
