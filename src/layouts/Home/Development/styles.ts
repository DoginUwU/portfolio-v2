import { motion } from 'framer-motion';
import styled from 'styled-components';
import BaseContainer from '../../../components/BaseContainer';

const Container = styled(BaseContainer)`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 32px;
`;

const Topic = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 18px;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 18px;

    & > div {
        flex: 1 0 calc(20% - 18px);
        max-width: 20%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
        & > div {
            flex: 1 0 calc(25% - 18px);
            max-width: calc(25% - 18px);
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        & > div {
            flex: 1 0 calc(33% - 18px);
            max-width: calc(33% - 18px);
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
        & > div {
            flex: 1 0 100%;
            max-width: 100%;
        }
    }
`;

export { Container, Content, Topic };
