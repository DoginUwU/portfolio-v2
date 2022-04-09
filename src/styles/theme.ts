import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
    colors: {
        background: '#28323C',
        white: '#fafafa',
        black: '#121212',
        gray: {
            900: '#757575',
            800: '#979797',
        },
        semantic: {
            blue: '#0066ff',
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
