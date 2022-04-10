/* eslint-disable @typescript-eslint/naming-convention */
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            background: string;
            white: string;
            black: string;
            gray: {
                900: string;
                800: string;
                700: string;
                600: string;
            };
            semantic: {
                blue: string;
                lightBlue: string;
            };
        };
        breakpoints: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    }
}
