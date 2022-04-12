import { motion, useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import { itemVariants, variants } from './helper';

import { Container, Content } from './styles';

const AboutMe: React.FC = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('show');
        }
    }, [controls, inView]);

    return (
        <Container>
            <Content variants={variants} initial="hidden" animate={controls} ref={ref}>
                <Title title="Sobre mim" subtitle="Melhor qualidade para você" />
                <motion.p variants={itemVariants}>
                    Olá, sou o Luiz, tenho 17 anos e sou um apaixonado desenvolvedor web especializado em front end que
                    além disso, trabalha como freelancer no Brasil. Minha paixão por software vem de sonhar com
                    criativas ideias e transformá-las em realidade por meio de interfaces funcionais e elegantes.
                </motion.p>
                <motion.p variants={itemVariants}>
                    Procuro sempre me dedicar ao máximo na criação de qualidade produtos com alta fidelidade de acordo
                    com a proposta definida. Eu estou sempre disposto a aprender novas tecnologias, bem como ajudar quem
                    precisa de orientação com o conhecimento adquirido em minha jornada até agora.
                </motion.p>
                <motion.p variants={itemVariants}>Desafios são sempre bem-vindos. é necessário melhorar.</motion.p>
                <motion.a variants={itemVariants} href="/luiz-eduardo-gotardo-cv.pdf" download>
                    <Button>Baixar CV</Button>
                </motion.a>
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
                width="330px"
                height="337px"
            />
        </Container>
    );
};
export default AboutMe;
