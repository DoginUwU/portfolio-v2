import { HTMLMotionProps } from 'framer-motion';
import React from 'react';

import { Container } from './styles';

interface BaseContainerProps extends HTMLMotionProps<'div'> {}

const BaseContainer: React.FC<BaseContainerProps> = (props) => <Container {...props} />;

export default BaseContainer;
