import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from 'styled-components';
import Loading from './components/Loading';
import { ProjectsProvider } from './context/ProjectsContext';
import Router from './routers';
import { GlobalStyles } from './styles/globalStyles';
import { theme } from './styles/theme';

const App = () => (
    <ProjectsProvider>
        <ThemeProvider theme={theme}>
            <Toaster
                containerStyle={{
                    marginTop: '80px',
                }}
            />
            <GlobalStyles />
            <AnimatePresence />
            <Loading>
                <Router />
            </Loading>
        </ThemeProvider>
    </ProjectsProvider>
);

export default App;
