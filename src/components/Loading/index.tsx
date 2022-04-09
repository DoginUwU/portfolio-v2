import React, { useEffect, useState } from 'react';
import { changeText } from './helper';

import { Container } from './styles';

interface LoadingProps {
    children: React.ReactElement<any, any>;
}

const Loading: React.FC<LoadingProps> = ({ children }) => {
    const [loadingText, setLoadingText] = useState('');
    const [loaded, setLoaded] = useState(false);

    const updateLoadingText = () => {
        changeText(setLoadingText).then(() => {
            setTimeout(() => {
                updateLoadingText();
            }, 800);
        });
    };

    useEffect(() => {
        updateLoadingText();

        setTimeout(() => {
            setLoaded(true);
        }, 6000);
    }, []);

    if (!loaded)
        return (
            <Container>
                <div dangerouslySetInnerHTML={{ __html: loadingText }} />
            </Container>
        );

    return children;
};

export default Loading;
