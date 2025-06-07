import React from 'react';
import { ThemeProvider, useTheme } from './ThemeContext';
import './index.css';

const ThemeComponent = () => {
  const { state, dispatch } = useTheme();

  const themeStyles = {
    backgroundColor: state.theme === 'light' ? '#ffffff' : '#222222',
    color: state.theme === 'light' ? '#000000' : '#ffffff',
    padding: '2rem',
    minHeight: '100vh',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={themeStyles}>
      <h1>Current Theme: {state.theme}</h1>
      <button
        onClick={() => dispatch({ type: 'TOGGLE_THEME' })}
        style={{
          padding: '0.5rem 1rem',
          cursor: 'pointer',
          background: state.theme === 'light' ? '#222' : '#eee',
          color: state.theme === 'light' ? '#fff' : '#000',
          border: 'none',
          borderRadius: '5px',
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

const App = () => (
  <ThemeProvider>
    <ThemeComponent />
  </ThemeProvider>
);

export default App;
