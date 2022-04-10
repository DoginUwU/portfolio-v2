import { Icon } from '@iconify/react';
import React, { FormEvent } from 'react';
import toast from 'react-hot-toast';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';

import { Card, Cards, Container, Content, Footer, Form, Header } from './styles';

const Contact: React.FC = () => {
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        toast.error('Indisponível no momento.');
    };

    return (
        <Container>
            <Content>
                <Header>
                    <h1>Entre em contato</h1>
                    <p>Fique a vontade para escolher o modo de contato, irei te responder o mais breve possível.</p>
                </Header>
                <Cards>
                    <Card>
                        <Icon icon="bxs:phone" />
                        +55 (43) 9 8492-2480
                    </Card>
                    <Card active>
                        <Icon icon="ic:baseline-email" />
                        luizgotardo01@gmail.com
                    </Card>
                    <Card>
                        <Icon icon="carbon:location-filled" />
                        Cambé, Parque Manela
                    </Card>
                </Cards>
                <Footer>
                    <a href="https://github.com/DoginUwU" target="_blank" rel="noreferrer">
                        <Icon icon="akar-icons:github-fill" />
                    </a>
                    <a href="https://www.linkedin.com/in/luiz-gotardo/" target="_blank" rel="noreferrer">
                        <Icon icon="akar-icons:linkedin-fill" />
                    </a>
                    <a href="https://discord.com/users/656129876092518400" target="_blank" rel="noreferrer">
                        <Icon icon="akar-icons:discord-fill" />
                    </a>
                </Footer>
            </Content>
            <Form onSubmit={handleSubmit}>
                <Input label="Seu nome" placeholder="Seu nome" />
                <Input label="Email" placeholder="Email" />
                <Textarea label="Mensagem" placeholder="Mensagem" />
                <Button type="submit">Enviar</Button>
            </Form>
        </Container>
    );
};
export default Contact;
