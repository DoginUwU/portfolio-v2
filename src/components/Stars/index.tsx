import React, { createRef, useEffect } from 'react';
import { Stars as StarsHelper } from './helper';

import { Canvas } from './styles';

const Stars: React.FC = () => {
    const ref = createRef<HTMLCanvasElement>();

    useEffect(() => {
        if (ref.current) {
            const helper = new StarsHelper(ref.current);

            helper.init();
        }
    }, [ref]);

    return <Canvas ref={ref} />;
};

export default Stars;
