import React from 'react';
import logo from './logo.svg';
import { ThemeProvider } from 'styled-components';
// import { theme } from './src/stories/styles/theme';
import './App.css';

function App() {
  return (
    // <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    // </ThemeProvider>
  );
}

export default App;
