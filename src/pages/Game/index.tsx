import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { HashLoader } from 'react-spinners';

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
                    <HashLoader color="white" />
                </Loading>
            )}
        </GameContainer>
    );
};

export default Game;
