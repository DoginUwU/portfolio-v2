import React from 'react';

import { Container } from './styles';

interface TitleProps {
    title: string;
    subtitle?: string;
}

const Title: React.FC<TitleProps> = ({ title, subtitle }) => (
    <Container>
        {subtitle && (
            <div>
                <div className="block" />
                <h2>{subtitle}</h2>
            </div>
        )}
        <h1>{title}</h1>
    </Container>
);

export default Title;
