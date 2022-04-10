import { motion } from 'framer-motion';
import React from 'react';
import Button from '../../../components/Button';
import Title from '../../../components/Title';

import { Container, Content } from './styles';

const AboutMe: React.FC = () => (
    <Container>
        <Content>
            <Title title="Sobre mim" subtitle="Melhor qualidade para você" />
            <p>
                Olá, sou o Luiz, um apaixonado desenvolvedor web especializado em front end que além disso, trabalha
                como freelancer no Brasil. Minha paixão por software vem de sonhar com criativas ideias e transformá-las
                em realidade por meio de interfaces funcionais e elegantes.
            </p>
            <p>
                Procuro sempre me dedicar ao máximo na criação de qualidade produtos com alta fidelidade de acordo com a
                proposta definida. Eu estou sempre disposto a aprender novas tecnologias, bem como ajudar quem precisa
                de orientação com o conhecimento adquirido em minha jornada até agora.
            </p>
            <p>Desafios são sempre bem-vindos. é necessário melhorar.</p>
            <a href="/luiz-eduardo-gotardo-cv.pdf" download>
                <Button>Baixar CV</Button>
            </a>
        </Content>
        <motion.img
            src="/assets/startup.svg"
            alt="Startup"
            initial={{ opacity: 0 }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 0.8,
                },
            }}
            viewport={{ once: true, amount: 0.8 }}
        />
    </Container>
);
export default AboutMe;
