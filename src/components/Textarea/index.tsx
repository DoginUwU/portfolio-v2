import React from 'react';

import { Container } from './styles';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string | React.ReactNode;
}

const Textarea: React.FC<TextareaProps> = ({ label, ...rest }) => (
    <label
        htmlFor={rest.id}
        style={{
            width: '100%',
        }}
    >
        {label}
        <Container {...rest} />
    </label>
);

export default Textarea;
