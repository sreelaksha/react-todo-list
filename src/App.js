import './App.css';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { ThemeProvider, StyleReset } from "atomize";
import { ThemeProvider as StyledProvider } from 'styled-components';
import Dashboard from './pages/Dashboard.js';
import Users from './pages/Users.js';
import theme from './theme';
import { BrowserRouter,Route, Switch } from 'react-router-dom';
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
                    <BrowserRouter>
                        <Switch>
                            <Route path = "/" exact component = {Dashboard} ></Route>
                            <Route path = "/users" component = {Users} ></Route>
                        </Switch>
                    </BrowserRouter>
                </StyletronProvider>
            </StyledProvider>
        </ThemeProvider>
   );
}

export default App;
