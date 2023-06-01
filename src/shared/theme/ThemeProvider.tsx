import React from 'react';
import {ThemeProvider as ThemeProviderRS} from '@shopify/restyle';
import {getTheme} from './default';

interface ThemeProviderProps {
  children?: React.ReactElement;
  mode: 'light' | 'dark';
}
export const ThemeProvider = ({children, mode}: ThemeProviderProps) => {
  const RStheme = getTheme(mode);
  return <ThemeProviderRS theme={RStheme}>{children}</ThemeProviderRS>;
};
