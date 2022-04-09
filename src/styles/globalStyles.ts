import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.white};
    }

    #root {
        padding-left: 90px;

        @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
            padding-left: 0;
        }
    }

    button {
        cursor: pointer;
    }
`;

export { GlobalStyles };
