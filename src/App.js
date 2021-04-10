import './App.css';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { ThemeProvider, StyleReset } from "atomize";
import { ThemeProvider as StyledProvider } from 'styled-components';
import Dashboard from './pages/Dashboard.js';
import theme from './theme';
import GlobalStyles from './styles.js';

const debug = new DebugEngine();
const engine = new Styletron();

function App() {
  return (
        <ThemeProvider theme={theme}>
            <StyledProvider theme={theme}>
                <StyletronProvider value={engine} debug={debug} debugAfterHydration>
                    <StyleReset/>
                    <GlobalStyles/>
                    <Dashboard/>
                </StyletronProvider>
            </StyledProvider>
        </ThemeProvider>
   );
}

export default App;
