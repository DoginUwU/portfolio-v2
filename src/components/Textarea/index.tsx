import React, { forwardRef } from 'react';

import { Container } from './styles';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string | React.ReactNode;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ label, ...rest }, ref) => (
    <label
        htmlFor={rest.id}
        style={{
            width: '100%',
        }}
    >
        {label}
        <Container ref={ref} {...rest} />
    </label>
));

export default Textarea;
