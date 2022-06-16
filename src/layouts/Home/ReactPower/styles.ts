import styled from 'styled-components';
import BaseContainer from '../../../components/BaseContainer';

const Container = styled(BaseContainer)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 42px;
    position: relative;
    padding: 100px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        padding: 50px 20px;
    }
`;

const Header = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 18px;

    h1 {
        font-size: 2.5rem;
        font-weight: 500;
    }

    p {
        max-width: 600px;
        color: ${({ theme }) => theme.colors.gray[600]};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        text-align: start;
    }
`;

const Content = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    gap: 32px;
    flex-wrap: wrap;
    justify-content: center;

    & div:nth-child(3) {
        width: 100%;
    }
`;

const CheckedLabel = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 8px;
    font-weight: 300;

    svg {
        width: 24px;
        height: 24px;
        color: ${({ theme }) => theme.colors.semantic.lightBlue};
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        width: 100%;
        justify-content: center;
        display: none;
    }
`;

export { Container, Header, Content, CheckedLabel };
