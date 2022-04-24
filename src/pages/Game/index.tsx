import React, { useState } from 'react';
import ReactLoading from 'react-loading';

import { Container, Loading } from './styles';

const Game: React.FC = () => {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
    };

    return (
        <>
            <Container
                onLoad={handleLoad}
                src="https://portfolio-game-web.herokuapp.com"
                frameBorder="0"
                title="Em busca dos bugs"
            />
            {!loaded && (
                <Loading>
                    <ReactLoading type="spin" />
                </Loading>
            )}
        </>
    );
};

export default Game;
