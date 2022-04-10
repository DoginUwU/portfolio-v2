import styled from 'styled-components';

interface HeaderProps {
    backgroundImage: string;
}

const Container = styled.div``;

const Header = styled.section<HeaderProps>`
    width: 100%;
    height: 600px;
    background-color: ${({ theme }) => theme.colors.black};
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
    background-size: cover;
    background-position: 500px;
    background-repeat: no-repeat;
`;

export { Container, Header };
