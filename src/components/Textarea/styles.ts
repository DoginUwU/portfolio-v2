import styled from 'styled-components';

const Container = styled.textarea`
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    border: none;
    outline-color: ${({ theme }) => theme.colors.semantic.blue};
    border: 1px solid ${({ theme }) => theme.colors.gray[900]};
`;

export { Container };
