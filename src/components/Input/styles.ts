import styled from 'styled-components';

const Container = styled.input`
    width: 100%;
    padding: 16px 32px;
    border-radius: 8px;
    border: none;
    outline-color: ${({ theme }) => theme.colors.semantic.blue};
`;

export { Container };
