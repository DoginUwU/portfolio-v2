import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';
import Loading from './components/Loading';
import Home from './pages/Home';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Loading>
            <Home />
        </Loading>
    </ThemeProvider>
);

export default App;
