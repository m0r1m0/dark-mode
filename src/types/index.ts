import { Dispatch } from 'react';

export type ColorMode = 'light' | 'dark';

export interface ThemeContextType {
  colorMode: ColorMode;
  setColorMode: () => void;
}

export interface Theme {
  background: string;
  color: string;
}
