import { useState } from 'react';
import { ColorMode } from '../types';

export function useColorMode() {
  const [colorMode, setColorMode] = useState<ColorMode>('light');
}
