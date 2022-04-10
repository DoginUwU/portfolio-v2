import { Icon } from '@iconify/react';
import React from 'react';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';

import { Card, Cards, Container, Content, Footer, Form, Header } from './styles';

const Contact: React.FC = () => (
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
                <a href="/" target="_blank">
                    <Icon icon="akar-icons:github-fill" />
                </a>
                <a href="/" target="_blank">
                    <Icon icon="akar-icons:linkedin-fill" />
                </a>
                <a href="/" target="_blank">
                    <Icon icon="akar-icons:discord-fill" />
                </a>
            </Footer>
        </Content>
        <Form>
            <Input label="Seu nome" placeholder="Seu nome" />
            <Input label="Email" placeholder="Email" />
            <Textarea label="Mensagem" placeholder="Mensagem" />
            <Button type="submit">Enviar</Button>
        </Form>
    </Container>
);

export default Contact;
