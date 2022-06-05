import React, { useState } from 'react';
import ReactLoading from 'react-loading';

import { Game as GameContainer, Container, Loading } from './styles';

const Game: React.FC = () => {
    const [loaded, setLoaded] = useState(false);

    const handleLoad = () => {
        setLoaded(true);
    };

    return (
        <GameContainer>
            <Container
                onLoad={handleLoad}
                src="https://portfolio-game-web.herokuapp.com"
                frameBorder="0"
                title="Em busca dos bugs"
                scrolling="no"
            />
            {!loaded && (
                <Loading>
                    <ReactLoading type="spin" />
                </Loading>
            )}
        </GameContainer>
    );
};

export default Game;
