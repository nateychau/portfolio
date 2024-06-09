import './App.css'

import { ThemeProvider } from 'styled-components';

import { HomePage } from './pages/Home';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HomePage />
    </ThemeProvider>
  )
}

export default App
