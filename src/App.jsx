import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Internship from './components/Internship';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#0c7ff2',
      },
      background: {
        default: darkMode ? '#111418' : '#ffffff',
        paper: darkMode ? '#1b2127' : '#f5f5f5',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#111418',
        secondary: darkMode ? '#9cabba' : '#5f6d7e',
      },
    },
    typography: {
      fontFamily: '"Space Grotesk", "Noto Sans", sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: '12px',
            textTransform: 'none',
            fontWeight: 'bold',
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div style={{ 
        backgroundColor: theme.palette.background.default,
        minHeight: '100vh',
        color: theme.palette.text.primary
      }}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Hero />
        <About />
        <Skills />
        <Internship />
        <Projects />
        <Certificates />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;