import React, { useEffect, useState } from 'react';
import { changeText } from './helper';

import { Container } from './styles';

const Loading: React.FC = () => {
    const [loadingText, setLoadingText] = useState('');

    const updateLoadingText = () => {
        changeText(setLoadingText).then(() => {
            setTimeout(() => {
                updateLoadingText();
            }, 1000);
        });
    };

    useEffect(() => {
        updateLoadingText();
    }, []);

    return (
        <Container>
            <div dangerouslySetInnerHTML={{ __html: loadingText }} />
        </Container>
    );
};

export default Loading;
