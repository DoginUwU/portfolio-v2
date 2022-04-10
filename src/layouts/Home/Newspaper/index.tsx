import React from 'react';
import toast from 'react-hot-toast';
import { useTheme } from 'styled-components';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

import { Container, Left, Right } from './styles';

const Newspaper: React.FC = () => {
    const theme = useTheme();

    const handleSubmit = (): void => {
        toast.error('Indisponível no momento.');
    };

    return (
        <Container>
            <Left>
                <h1>Receba novidades sobre meus projetos</h1>
                <p>Seu e-mail não será compartilhado com ninguém.</p>
            </Left>
            <Right>
                <Input placeholder="Email" />
                <Button color={theme.colors.white} textColor={theme.colors.black} onClick={handleSubmit}>
                    Assinar
                </Button>
            </Right>
        </Container>
    );
};

export default Newspaper;
