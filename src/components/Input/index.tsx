import React from 'react';

import { Container } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = (rest) => <Container type="text" {...rest} />;

export default Input;
