import React from 'react';
import Card from '../../../components/Card';
import Title from '../../../components/Title';
import { TOPICS } from './helper';

import { Container, Content, Topic } from './styles';

const Development: React.FC = () => (
    <Container>
        {TOPICS.map((topic) => (
            <Topic key={topic.title}>
                <Title title={topic.title} subtitle={topic.subtitle} />
                <Content>
                    {topic.items.map((item) => (
                        <Card key={item.title} {...item} />
                    ))}
                </Content>
            </Topic>
        ))}
    </Container>
);

export default Development;
