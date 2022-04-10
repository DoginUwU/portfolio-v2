import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    colors: {
        background: '#000000',
        white: '#fafafa',
        black: '#121212',
        gray: {
            900: '#757575',
            800: '#979797',
            700: '#b7b7b7',
            600: '#d0d0d0',
        },
        semantic: {
            blue: '#003f8c',
            lightBlue: '#428aff',
        },
    },
    breakpoints: {
        xs: '0',
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
    },
};

export { theme };
