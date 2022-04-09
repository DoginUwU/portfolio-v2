import React from 'react';

import { Container } from './styles';

interface BaseContainerProps extends React.HTMLAttributes<HTMLDivElement> {}

const BaseContainer: React.FC<BaseContainerProps> = (props) => <Container {...props} />;

export default BaseContainer;
