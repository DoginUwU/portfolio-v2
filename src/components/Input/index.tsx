import React, { forwardRef } from 'react';

import { Container } from './styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string | React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ label, ...rest }, ref) => (
    <label
        htmlFor={rest.id}
        style={{
            width: '100%',
        }}
    >
        {label}
        <Container ref={ref} type="text" {...rest} />
    </label>
));

export default Input;
