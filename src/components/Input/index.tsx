import React from 'react';

import { Container } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string | React.ReactNode;
}

const Input: React.FC<InputProps> = ({ label, ...rest }) => (
    <label
        htmlFor={rest.id}
        style={{
            width: '100%',
        }}
    >
        {label}
        <Container type="text" {...rest} />
    </label>
);

export default Input;