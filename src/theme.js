import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'rgba(0, 0, 0, 0.9)',
        fontFamily: 'var(--font)'
      }
    }
  }
});

export default theme;
