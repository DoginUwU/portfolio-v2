import styled from 'styled-components';
import BaseContainer from '../../../components/BaseContainer';

const Container = styled(BaseContainer)`
    width: 100%;
    background: ${({ theme }) => theme.colors.black};
    padding: 64px;
    border-radius: 8px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        flex-direction: column;
        gap: 32px;
        border-radius: 0px;
    }
`;

const Left = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    max-width: 500px;

    h1 {
        font-size: 1.5rem;
        font-weight: 500;
    }
`;

const Right = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 12px;

    input {
        width: 300px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 100%;
        justify-content: center;

        input {
            width: 100%;
            max-width: 300px;
        }
    }
`;

export { Container, Left, Right };
