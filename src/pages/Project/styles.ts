import styled from 'styled-components';
import BaseContainer from '../../components/BaseContainer';

interface HeaderProps {
    backgroundImage: string;
}

const Loading = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div``;

const Header = styled.section<HeaderProps>`
    width: 100%;
    height: 600px;
    background-color: ${({ theme }) => theme.colors.black};
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: 600px;
    background-repeat: no-repeat;
    background-attachment: fixed;
`;

const Title = styled(BaseContainer)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    h1 {
        font-size: 5rem;
    }

    p {
        font-size: 1.5rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 1rem;
        }
    }
`;

export { Container, Header, Title, Loading };
