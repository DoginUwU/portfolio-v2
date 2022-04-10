import { Icon } from '@iconify/react';
import React, { useEffect, useState } from 'react';
import { useTheme } from 'styled-components';
import useWindowDimensions from '../../hooks/useWindowDimensions';

import { Content } from './styles';

interface CarouselProps {
    itemsCount: number;
    children: (activeIndex: number) => React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ children, itemsCount }) => {
    const [stopAutoCarousel, setStopAutoCarousel] = useState(false);
    const theme = useTheme();
    const { width } = useWindowDimensions();
    const isMobile = width <= Number(theme.breakpoints.sm.replace('px', ''));
    const [activeIndex, setActiveIndex] = useState(1);
    const translateX = isMobile ? activeIndex * 100 : activeIndex * 33.33 - 33;

    const checkIndex = (index: number) => {
        if (index < 0) {
            return itemsCount - 1;
        }
        if (index > itemsCount - 1) {
            return 0;
        }
        return index;
    };

    const updateIndex = (index: number) => {
        setActiveIndex(checkIndex(index));
        setStopAutoCarousel(true);
        setTimeout(() => {
            setStopAutoCarousel(false);
        }, 5000);
    };

    useEffect(() => {
        let interval = 0;

        if (!stopAutoCarousel)
            interval = setInterval(() => {
                setActiveIndex((index) => checkIndex(index + 1));
            }, 5000);

        return () => clearInterval(interval);
    }, [stopAutoCarousel]);

    return (
        <Content>
            <div
                className="inner"
                style={{
                    transform: `translateX(-${translateX > 0 ? translateX : 0}%)`,
                }}
            >
                {children(activeIndex)}
            </div>
            {activeIndex !== 0 && (
                <button type="button" className="button prev" onClick={() => updateIndex(activeIndex - 1)}>
                    <Icon icon="ant-design:left-outlined" />
                </button>
            )}
            <button type="button" className="button next" onClick={() => updateIndex(activeIndex + 1)}>
                <Icon icon="ant-design:right-outlined" />
            </button>
        </Content>
    );
};

export default Carousel;
