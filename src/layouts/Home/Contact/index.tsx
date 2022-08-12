import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Textarea from '../../../components/Textarea';
import { Mail } from '../../../services/mail';

import { Card, Cards, Container, Content, Footer, Form, Header } from './styles';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const { register, handleSubmit, reset } = useForm<FormData>();

    const onSubmit = async (data: FormData): Promise<void> => {
        setLoading(true);
        await Mail.getInstance().send({
            from_name: data.name,
            reply_to: data.email,
            message: data.message,
        });

        toast.success('Mensagem enviada com sucesso!');
        reset();
        setLoading(false);
    };

    return (
        <Container id="contact">
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
                    <a href="https://github.com/DoginUwU" target="_blank" rel="noreferrer" aria-label="Github profile">
                        <Icon icon="akar-icons:github-fill" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/luiz-gotardo/"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Linkedin profile"
                    >
                        <Icon icon="akar-icons:linkedin-fill" />
                    </a>
                    <a
                        href="https://discord.com/users/656129876092518400"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Discord profile"
                    >
                        <Icon icon="akar-icons:discord-fill" />
                    </a>
                </Footer>
            </Content>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input {...register('name', { required: true })} label="Seu nome" placeholder="Seu nome" />
                <Input {...register('email', { required: true })} label="Email" placeholder="Email" />
                <Textarea {...register('message', { required: true })} label="Mensagem" placeholder="Mensagem" />
                <Button type="submit" loading={loading}>
                    Enviar
                </Button>
            </Form>
        </Container>
    );
};
export default Contact;
