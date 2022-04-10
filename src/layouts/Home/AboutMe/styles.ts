import styled from 'styled-components';
import BaseContainer from '../../../components/BaseContainer';

const Container = styled(BaseContainer)`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 18px;

    & > img {
        max-width: 330px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        & > img {
            display: none;
        }
    }
`;

const Content = styled.div`
    max-width: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 12px;

    & p {
        text-indent: 2em;
        color: ${({ theme }) => theme.colors.gray[600]};
    }

    button {
        margin-top: 24px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        max-width: 100%;
    }
`;

export { Container, Content };
