import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Card from '../../../components/Card';
import Title from '../../../components/Title';
import { itemVariants, TOPICS, variants } from './helper';

import { Container, Content, Topic } from './styles';

const Development: React.FC = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start('show');
        }
    }, [controls, inView]);

    return (
        <Container>
            {TOPICS.map((topic) => (
                <Topic key={topic.title} variants={variants} initial="hidden" animate={controls} ref={ref}>
                    <Title title={topic.title} subtitle={topic.subtitle} />
                    <Content>
                        {topic.items.map((item) => (
                            <Card key={item.title} {...item} variants={itemVariants} />
                        ))}
                    </Content>
                </Topic>
            ))}
        </Container>
    );
};

export default Development;
