import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from 'styled-components';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Home from './pages/Home';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

const App = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AnimatePresence />
        <Loading>
            <Home />
        </Loading>
    </ThemeProvider>
);

export default App;
