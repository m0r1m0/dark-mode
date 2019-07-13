import React, { useState } from 'react';
import { ThemeProvider as EmotionProvider } from 'emotion-theming';
import { ThemeContext } from '../themeContext';
import { ColorMode } from '../types';
import { getTheme } from '../theme';

const ThemeProvider: React.FC = ({ children }) => {
  const [colorMode, setColorMode] = useState<ColorMode>('light');
  function toggleColorMode() {
    setColorMode(colorMode === 'light' ? 'dark' : 'light');
  }
  return (
    <EmotionProvider theme={getTheme(colorMode)}>
      <ThemeContext.Provider
        value={{
          colorMode,
          setColorMode: toggleColorMode,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </EmotionProvider>
  );
};

export default ThemeProvider;
