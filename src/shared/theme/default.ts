import {lightColors, darkColors} from './color';
import {createTheme} from '@shopify/restyle';

const theme = createTheme({
  spacing: {
    s: 8,
    m: 16,
  },
  colors: {
    ...lightColors,
  },
  textVariants: {
    defaults: {},
    body: {
      fontSize: 16,
      lineHeight: 24,
      // color: 'mainForeground',
    },
  },
  cardVariants: {
    defaults: {},
    primary: {
      backgroundColor: 'primaryCardBackground',
      shadowOpacity: 0.3,
    },
    secondary: {
      backgroundColor: 'secondaryCardBackground',
      shadowOpacity: 0.1,
    },
  },
});

export type Theme = typeof theme;

const darkTheme: Theme = {
  ...theme,
  colors: {
    ...darkColors,
  },
};

export const getTheme = (mode: 'light' | 'dark') =>
  mode === 'light' ? theme : darkTheme;

export default theme;
